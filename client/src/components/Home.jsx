import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import '../styles/css/Home.css';

export default function Home(props) {
  const [classTypeList, setClassTypeList] = useState([]);
  const navigate = useNavigate();

  // Axios call to server for list of class types
  useEffect(() => {
    axios.get('/classTypes')
      .then(result => setClassTypeList(result.data))
      .catch(e => {});
  }, []);

  const classTypes = classTypeList.map((element, index) => (
    <li key={index}>
      <div className="bubble">
        <div>
          <h3>{element.name}</h3>
          <button onClick={() => {props.setClassTypeId(element.class_type_id); navigate('/schedule');}}>Schedule</button>
        </div>
        <span>{element.description}</span>
      </div>
    </li>
  ))

  return (
    <div className="home">
      <img src={require('../images/homepage-logo.jpg')} alt='EasyFit' width={"1200"} height={"300"}/>
      <h2>Classes</h2>
      <ul>
        {classTypes}
      </ul>
    </div>
  );
};