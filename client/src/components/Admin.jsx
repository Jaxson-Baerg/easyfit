import React, { useState, useEffect } from 'react';
import axios from "axios";

import ClassListButton from './ClassListButton';

export default function Admin(props) {
  const [classLists, setClassLists] = useState([]);
  const [studentsIsShown, setStudentsIsShown] = useState(false);

  //Axios call for the class
  useEffect(() => {
    axios.get('/classes')
    .then(result => setClassLists(result.data))
    .catch(e => console.log(e));
  }, []); 

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const formatDate = (dateStr) => { // "2022-12-15T14:30:00.000Z"
    const tempDate = dateStr.split(/[-T.]+/); // tempDate = ["2022", "12", "15", "14:30:00", "000Z"]
    return `${months[tempDate[1] - 1]} ${tempDate[2]}, ${tempDate[0]} - ${tempDate[3]}`; // "December 15, 2022 - 14:30:00"
  };

  const classList = classLists.map((element, index) =>
    <li key={index}>
      <h2>{element.name}</h2>
      <h3>Start date: {formatDate(element.start_datetime)}</h3>
      <h3>End date: {formatDate(element.end_datetime)}</h3>
      <ClassListButton class_id={element.class_id} studentsIsShown={studentsIsShown} setStudentsIsShown={setStudentsIsShown}>View Student List</ClassListButton>
    </li>
  );

  return (
    <div>
      <h1>ADMIN</h1>
      <ul className='classList'>
        {classList}
      </ul>  
    </div>
  );
}
