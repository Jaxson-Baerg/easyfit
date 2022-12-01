import React from 'react'

export default function Login() {
  return (
    <div className="container">
              <div>
                <article>
                  <h4>Login</h4>
                  <p>Please enter your email</p>
                  <form>
                    <div>
                      <span> <i className="fa fa-envelope"></i> </span>
                      <input name="email" placeholder="Email address" type="email" />
                    </div>
                    <p>Don't have an account? <a href="/register">Log In</a> </p>
                  </form>
                </article>
              </div>
            </div>
  )
}
