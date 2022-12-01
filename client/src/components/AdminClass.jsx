import React, { useState, useEffect, } from "react";
import { Link, Routes, Route, useParams } from 'react-router-dom';
import axios from "axios";
import ClassListButton from './ClassListButton';
import AdminStudent from './AdminStudent'; 
import '../styles/scss/AllClassTypes.scss';


export default function AdminClass(props) {

  const { id } = useParams();

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`/classes/${id}/students`)
    .then(result => setStudents(result.data))
    .catch(e => console.log(e));
  }, []); 
  
  const student = students.map((element, index) =>
  <li key={index}>
    <Link to={`/adminstudent/${element.student_id}`}>
    <h2>{element.first_name} {element.last_name}</h2>
    </Link> 
    <Link to={'/register'}>
      <ClassListButton>Cancel Registration</ClassListButton>
    </Link>
  </li>
  );
  
  return (
    <div>
    <div>
      <h1>Student</h1>
      <ul className='students'>
        {student}
      </ul>
    </div>
    <Routes>
      <Route path="/adminstudent" elements={<AdminStudent/>}/>
    </Routes>
    </div>  
  )
}
