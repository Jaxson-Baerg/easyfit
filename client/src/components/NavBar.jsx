import React, { useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/css/NavBar.css';

import NavList from "./NavList";

export default function NavBar(props) {
   const navOptions = useRef(null);

   return (
      <nav className="wave">
        <div>
          <h1><Link to="/" style={{all: "unset"}}> EasyFit </Link></h1>
          <img src={require('../images/easyfit-logo.png')} alt='EasyFit' width={"50"} height={"50"}/>
        </div>
        <NavList navOptions={navOptions}/>
        <button onClick={() => navOptions.current.classList.toggle('show')}><i className="fa-solid fa-bars fa-2x"></i></button>
      </nav>
   );
};