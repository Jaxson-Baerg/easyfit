import React from 'react';
import StripeContainer from './StripeContainer';

import '../styles/css/Purchase.css';

export default function Purchase(props) {
  return (
    <div className='purchase'>
      <h2>Purchase Credits</h2>
      <StripeContainer credits={props.credits} studentId={props.studentId} subtotal={props.subtotal}/>
    </div>
  )
}
