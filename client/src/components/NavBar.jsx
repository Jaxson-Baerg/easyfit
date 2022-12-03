import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import NavList from "./NavList";

import '../styles/css/NavBar.css';

export default function NavBar(props) {
  const [studentName, setStudentName] = useState(null);
  const navOptions = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/students/${props.loggedInId}`)
      .then(result => setStudentName(result.data[0].first_name))
      .catch(e => {});
  }, [props.loggedInId]);

  return (
    <nav className="wave">
      <div>
        <h1><Link to="/" style={{all: "unset"}}> EasyFit </Link></h1>
        <img src={require('../images/easyfit-logo.png')} alt='EasyFit' width={"50"} height={"50"}/>
        {props.loggedInId && <><h4>Logged in as: {studentName}</h4><button onClick={() => {props.logout(); navigate('/'); window.location.reload(false);}}>Logout</button></>}
      </div>
      <NavList navOptions={navOptions}/>
      <button onClick={() => navOptions.current.classList.toggle('show')}><i className="fa-solid fa-bars fa-2x"></i></button>
    </nav>
   );
};