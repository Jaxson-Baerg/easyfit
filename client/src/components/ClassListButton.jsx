import React from "react";

export default function ClassListButton(props) {
  // const [students, setStudents] = useState(null);

  const clickHandler = () => {
    // axios.get(`/${props.class_id}/students`)
    //   .then(result => setStudents(result))
    //   .catch(e => console.log(e));
    // props.setStudentsIsShown(true);
  };

  return (
    <button onClick={() => clickHandler()}>{props.children}</button>
  )
}
