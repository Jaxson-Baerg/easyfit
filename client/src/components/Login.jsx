import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('');

  return (
    <div className="container">
              <div>
                <article>
                  <h4>Login</h4>
                  <p>Please enter your email</p>
                  <form action="http://localhost:3001/login" method="post">
                    <div>
                      <span> <i className="fa fa-envelope"></i> </span>
                      <input name="email" placeholder="Email address" type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    </div>
                    <button type='submit'>Submit</button>
                    <p>Don't have an account? <a href="/register">Register</a> </p>
                  </form>
                </article>
              </div>
            </div>
  )
}
