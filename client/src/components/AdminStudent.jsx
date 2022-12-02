import React, { useState, useEffect, } from "react";
import axios from "axios";

import '../styles/css/AdminStudent.css';

export default function AdminStudent(props) {
  const [studentNames, setStudentNames] = useState([]);

  useEffect(() => {
    axios.get(`/students/${props.studentId}`)
    .then(result => setStudentNames(result.data))
    .catch(e => console.log(e));
  }, [props.studentId]);

  const studentName = studentNames.map((element, index) =>
    <li key={index}>
      <h2>{element.first_name} {element.last_name}</h2>
      <h4>Email: {element.email}</h4>
      <h4>Credits: {element.credits}</h4>
    </li>
  );

  return (
    <div className="adminstudent">
      <h1>Student:</h1>
      <ul className='students'>
        {studentName}
      </ul>
    </div>
  )
}