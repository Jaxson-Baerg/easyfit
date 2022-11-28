import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/scss/AllClassTypes.scss'

export default function AllClassTypes(props) {
  const [classTypeList, setClassTypeList] = useState([]);

  // Axios call to server for list of class types
  useEffect(() => {
    axios.get('/classTypes')
      .then(result => setClassTypeList(result.data))
      .catch(e => console.log(e));
  }, []);

  const classTypes = classTypeList.map((element, index) => (
    <li key={index}>
      <h3>{element.name}</h3>
      <span>{element.description}</span>
      <button>Schedule</button>
    </li>
  ))

  return (
      <ul>
        {classTypes}
      </ul>
  );
};