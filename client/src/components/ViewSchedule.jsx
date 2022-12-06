import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import timeConvert from '../helpers/timeConvert';

import '../styles/css/ViewSchedule.css';

export default function ViewSchedule(props) {
  const [classLists, setClassLists] = useState([]);
  const navigate = useNavigate();

  //Axios call for the class
  useEffect(() => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formatDate = (dateStr) => { // "2022-12-15T14:30:00.000Z"
      const tempDate = dateStr.split(/[-T.]+/); // tempDate = ["2022", "12", "15", "14:30:00", "000Z"]
      return `${months[tempDate[1] - 1]} ${tempDate[2]}, ${tempDate[0]}`; // "December 15, 2022 - 14:30:00"
    };
    const formatTime = (dateStr) => {
      const tempDate = dateStr.split(/[-T.]+/);
      return timeConvert(tempDate[3]);
    };

    const handleRegister = (class_id, credit_cost) => {
      const studentId = props.cookies.get('loggedIn');
      if (studentId) {
        if (window.confirm(`Are you sure you want to spend ${credit_cost} credit(s) to register for this class?`)) {
          // Check if student has enough credits to register
          axios.get(`/students/${studentId}`)
            .then(result => {
              if (result.data[0].credits >= credit_cost) {
                // Axios request x2 (decrease credits & register student for class)
                axios.put(`/students/${studentId}`, null, { params: {
                  credits: result.data[0].credits - credit_cost
                }})
                  .then(() => {
                    axios.post(`/classes/${class_id}/register`, null, { params: {
                      student_id: studentId
                    }})
                      .then(() => {
                        props.setClassId(class_id);
                        navigate('/schedule/success');
                      })
                  })
              } else {
                navigate('/purchase');
              }
            })
            .catch(e => {});
          
        }
      } else {
        if (window.confirm("You must login first to register for a class.")) {
          navigate('/login');
        }
      }
    };

    const getClassList = (idArr) => {
      axios.get(`/classes/type/${props.classTypeObj.class_type_id}`)
        .then(result => setClassLists(result.data.map((element, index) => (
          <li key={index} className="bubble">
            <h2>{element.name} -- {idArr.includes(element.class_id) ? "Already registered!" : `${element.spots_remaining} spots left!`}</h2>
            <h3>Day: {formatDate(element.start_datetime)}</h3>
            <h3>Time: {formatTime(element.start_datetime)} - {formatTime(element.end_datetime)}</h3>
            <h4>{element.description}</h4>
            <button disabled={idArr.includes(element.class_id)} onClick={() => handleRegister(element.class_id, element.credit_cost)}>Register</button>
            <h3 className="credits">Credits to Register: {element.credit_cost}</h3>
          </li>))))
        .catch(e => console.log(e));
    };

    if (props.cookies.get('loggedIn')) {
      axios.get(`/students/${props.cookies.get('loggedIn')}/classes/id`)
        .then(result => getClassList(result.data.map(element => element.class_id)))
        .catch(e => {});
    } else {
      getClassList([]);
    }
  }, [props, navigate]);

  return (
    <div className="viewschedule">
      {classLists.length > 0 && <><h1 className='title'>Schedule for {props.classTypeObj.name}</h1><ul>
        {classLists}
      </ul></>}
      {classLists.length === 0 && <><h1 className='title'>There are currently no scheduled classes for {props.classTypeObj.name}</h1><h3>Check back later!</h3></>}
    </div>  
  )
}
