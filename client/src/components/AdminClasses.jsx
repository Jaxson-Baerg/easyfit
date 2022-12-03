import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import '../styles/css/Admin.css';

export default function Admin(props) {
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

    axios.get('/classes')
    .then(result => {
      setClassLists(result.data.map((element, index) => (
        <li key={index}>
          <h2>{element.name} -- {element.spots_remaining} spots left</h2>
          <h3>Day: {formatDate(element.start_datetime)}</h3>
          <h3>Time: {formatTime(element.start_datetime)} - {formatTime(element.end_datetime)}</h3>
          <h4>{element.description}</h4>
          <Link to={`/admin/class/`}>
            <button onClick={() => props.setClassId(element.class_id)}>View Student List</button>
          </Link>
        </li>)));
    })
    .catch(e => console.log(e));
  }, [props]);

  return (
    <div className='admin'>
      <h1>ADMIN</h1>
      <h2>All Classes:</h2>
      <ul className='classList'>
        {classLists}
      </ul>
    </div>
  );
}
