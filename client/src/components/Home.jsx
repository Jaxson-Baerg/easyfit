import React, { useState, useEffect } from "react";
import axios from "axios";

import '../styles/css/Home.css';

export default function Home(props) {
  const [classTypeList, setClassTypeList] = useState([]);

  // Axios call to server for list of class types
  useEffect(() => {
    axios.get('/classTypes')
      .then(result => setClassTypeList(result.data))
      .catch(e => console.log(e));
  }, []);

  const classTypes = classTypeList.map((element, index) => (
    <li key={index}>
      <div>
        <h3>{element.name}</h3>
        <button>Schedule</button>
      </div>
      <span>{element.description}</span>
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