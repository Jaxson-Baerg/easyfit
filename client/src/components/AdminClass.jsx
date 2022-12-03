import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import '../styles/css/AdminClass.css';

export default function AdminClass(props) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`/classes/${props.classId}/students`)
    .then(result => setStudents(result.data.map((element, index) =>
      <li key={index} className="bubble">
        <h2>{element.first_name} {element.last_name}</h2>
        <Link to={`/admin/student`}>
          <button onClick={() => props.setStudentId(element.student_id)}>View</button>
        </Link>
        <Link to={'/register-account'}>
          <button onClick={() => props.setStudentId(element.student_id)}>Cancel Registration</button>
        </Link>
      </li>
    )))
    .catch(e => console.log(e));
  }, [props]); 
  
  return (
    <div className="adminclass">
      <div>
        <h1>Students for class id {props.classId}:</h1>
        <ul className='students'>
          {students}
        </ul>
      </div>
    </div>  
  )
}
