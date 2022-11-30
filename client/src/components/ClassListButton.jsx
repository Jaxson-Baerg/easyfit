import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ClassListButton(props) {
  const [students, setStudents] = useState(null);

  const clickHandler = () => {
    axios.get(`/${props.class_id}/students`)
      .then(result => setStudents(result))
      .catch(e => console.log(e));
    props.setStudentsIsShown(true);
  };

  return (
    <button onClick={event => clickHandler()}>{props.children}</button>
  )
}
