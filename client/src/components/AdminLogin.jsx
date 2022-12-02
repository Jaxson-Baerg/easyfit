import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import '../styles/css/AdminLogin.css';

export default function AdminLogin(props) {
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    
    axios.get('/admin')
      .then(result => {
        if (event.target[0].value === result.data) props.setAdmin(true);
        navigate('/admin');
      })
      .catch(e => console.log(e));
  };

  return (
    <div className="adminlogin">
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Admin Password:</label><br/>
        <input type={"password"} id="password"/>
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  )
}