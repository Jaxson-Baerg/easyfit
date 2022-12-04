import React, {useState} from 'react'
import Purchase from './Purchase'

export default function SelectCredits() {
  const [credits, setCredits] = useState(1);
  const [formIsShown, setFormIsShown] = useState(false);

  const handleChange = (event) => {
    setCredits(event.target.value);
  };

  const values = [...Array(16).keys()].slice(1);
  const options = values.map((element, index) => <option key={index} value={element}>{element}</option>)

  return (
    <>
      <h3>Please select how many credits you would like to purchase</h3>
      <label>Credits selected:
        <select value={credits} onChange={handleChange}>
          {options}
        </select>
      </label>
      <h3>Subtotal:</h3>
      <p>{credits} credits is ${credits * 15.00} CAD</p>
      <button onClick={() => setFormIsShown(true)}>Proceed</button>
      {formIsShown && <Purchase credits={credits}/>}
    </>
  )
}
