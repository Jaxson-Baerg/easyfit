import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import '../styles/css/AdminClass.css';


export default function AdminClass(props) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`/classes/${props.classId}/students`)
    .then(result => setStudents(result.data))
    .catch(e => console.log(e));
  }, [props.classId]); 
  
  const student = students.map((element, index) =>
  <li key={index}>
    <h2>{element.first_name} {element.last_name}</h2>
    <Link to={`/admin/student`}>
      <button onClick={() => props.setStudentId(element.student_id)}>View</button>
    </Link>
    <Link to={'/register'}>
      <button onClick={() => props.setStudentId(element.student_id)}>Cancel Registration</button>
    </Link>
  </li>
  );
  
  return (
    <div className="adminclass">
      <div>
        <h1>Students for class id {props.classId}:</h1>
        <ul className='students'>
          {student}
        </ul>
      </div>
    </div>  
  )
}
