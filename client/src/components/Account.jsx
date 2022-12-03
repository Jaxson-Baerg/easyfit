import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import '../styles/css/Account.css';

export default function Account() {
  const [student, setStudent] = useState({});
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const cookies = new Cookies();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formatDate = (dateStr) => { // "2022-12-15T14:30:00.000Z"
      const tempDate = dateStr.split(/[-T.]+/); // tempDate = ["2022", "12", "15", "14:30:00", "000Z"]
      return `${months[tempDate[1] - 1]} ${tempDate[2]}, ${tempDate[0]}`; // "December 15, 2022"
    };
    const formatTime = (dateStr) => {
      const tempDate = dateStr.split(/[-T.]+/);
      return `${tempDate[3].split(':').slice(0, 2).join(':')}${Number(tempDate[3].split(':')[0]) > 11 || Number(tempDate[3].split(':')[0]) === 24 ? "pm" : "am"}`;
    };

    const cancelRegistration = (class_id) => {
      if (window.confirm("Are you sure you wish to cancel?")) {
        axios.delete(`/classes/${class_id}/register`, { params: {
          student_id: cookies.get('loggedIn')
        }})
          .then(() => {
            window.location.reload(false);
          })
          .catch(e => console.log(e));
      }
    };

    axios.get(`/students/${cookies.get('loggedIn')}`)
      .then(result => setStudent(result.data[0]))
      .catch(e => {});
    axios.get(`/students/${cookies.get('loggedIn')}/classes`)
      .then(result => setClasses(result.data.map((element, index) => (
        <li key={index}>
          <h2>{element.name}</h2>
          <h3>Day: {formatDate(element.start_datetime)}</h3>
          <h3>Time: {formatTime(element.start_datetime)} - {formatTime(element.end_datetime)}</h3>
          <h4>{element.description}</h4>
          <button disabled={element.difference.days < 1} onClick={() => cancelRegistration(element.class_id)}>Cancel Registration</button>
        </li>
      ))))
      .catch(e => {});
  }, []);

  return (
    <div className='account'>
      <h2>Account</h2>
      <h3>Hello, {student.first_name}!</h3>
      <ul>
        {classes}
      </ul>
      <h4>Credits: {student.credits}</h4>
    </div>
  )
}
