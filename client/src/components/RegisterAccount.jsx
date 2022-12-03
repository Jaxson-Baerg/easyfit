import React from 'react';

import '../styles/css/RegisterAccount.css';

export default function Register() {
  const submitHandler = () => {

  };

  return (
    <div className="registeraccount">
      <article>
        <h4>Create Account</h4>
        <p>Get started with your free account</p>
        <form action="http://localhost:3001/register" method="post" onSubmit={submitHandler}>
          <div>
            <span><i className="fa fa-user"></i></span>
            <input name="first_name" placeholder="First Name" type="text" />
            <input name="last_name" placeholder="Last Name" type="text" />
          </div>
          <div>
            <span> <i className="fa fa-envelope"></i> </span>
            <input name="email" placeholder="Email address" type="email" />
          </div>
          <button type='submit'>Submit</button>
          <p>Already have an account? <a href="/login">Log In</a> </p>
        </form>
      </article>
    </div>
  );
}
