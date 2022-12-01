import React, { useState, useEffect, } from "react";
import { Link, Routes, Route, useParams } from 'react-router-dom';
import axios from "axios";
import ClassListButton from './ClassListButton';
import '../styles/scss/AllClassTypes.scss';

export default function AdminStudent(props) {

  const { id } = useParams();

  const [studentNames, setStudentNames] = useState([]);

  useEffect(() => {
    axios.get(`/students/${id}`)
    .then(result => setStudentNames(result.data))
    .catch(e => console.log(e));
  }, []);

  const studentName = studentNames.map((element, index) =>
  <li key={index}>
    <h2>{element.first_name} {element.last_name}</h2>
    <h4>Email: {element.email}</h4>
    <h4>Credits: {element.credits}</h4>
  </li>
  );

  return (
    <div>
      <h1>Student</h1>
      <ul className='students'>
        {studentName}
      </ul>
    </div>
  )
}