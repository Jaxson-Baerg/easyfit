import React from "react";
import NavButton from "./NavButton";
import '../styles/scss/NavBar.scss'

export default function NavBar(props) {
   return (
      <nav>
        <h1>EasyFit</h1>
        <NavButton />
      </nav>
   );
};