import React from "react";
import { Link } from "react-router-dom";

import '../styles/scss/NavList.scss'

export default function NavList(props) {
   return (
      <ul>
         <li><Link to="/"> Home </Link></li>
         <li><Link to="/account"> My Account </Link></li>
         <li><Link to="/purchase"> Purchase Credits </Link></li>
      </ul>
   );
};