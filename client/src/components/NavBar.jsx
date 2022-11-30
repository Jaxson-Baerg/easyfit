import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/scss/NavBar.scss';

import NavList from "./NavList";

export default function NavBar(props) {
   const [open, setOpen] = useState(false);

   return (
      <nav>
        <h1><Link to="/"> EasyFit </Link></h1>
        <button onClick={() => setOpen(!open)}>Three Lined Button Symbol</button>
        {open && <NavList/>}
      </nav>
   );
};