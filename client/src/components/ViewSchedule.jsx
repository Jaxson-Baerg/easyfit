import React, { useState, useEffect } from "react";
import axios from "axios";

import '../styles/css/ViewSchedule.css';

export default function ViewSchedule(props) {
  const [classLists, setClassLists] = useState([]);

  //Axios call for the class
  useEffect(() => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formatDate = (dateStr) => { // "2022-12-15T14:30:00.000Z"
      const tempDate = dateStr.split(/[-T.]+/); // tempDate = ["2022", "12", "15", "14:30:00", "000Z"]
      return `${months[tempDate[1] - 1]} ${tempDate[2]}, ${tempDate[0]}`; // "December 15, 2022 - 14:30:00"
    };
    const formatTime = (dateStr) => {
      const tempDate = dateStr.split(/[-T.]+/);
      return `${tempDate[3].split(':').slice(0, 2).join(':')}${Number(tempDate[3].split(':')[0]) > 11 || Number(tempDate[3].split(':')[0]) === 24 ? "pm" : "am"}`;
    };

    axios.get(`/classes/type/${props.classTypeId}`)
    .then(result => {
      setClassLists(result.data.map((element, index) => (
        <li key={index}>
          <h2>{element.name} -- {element.spots_remaining} spots left</h2>
          <h3>Day: {formatDate(element.start_datetime)}</h3>
          <h3>Time: {formatTime(element.start_datetime)} - {formatTime(element.end_datetime)}</h3>
          <h4>{element.description}</h4>
          <button disabled={false} onClick={() => {}}>Register</button>
          <h3 className="credits">Credits to Register: {element.credit_cost}</h3>
        </li>)));
    })
    .catch(e => console.log(e));
  }, [props]);

  return (
    <div className="viewschedule">
      <ul>
        {classLists}
      </ul>
    </div>  
  )
}