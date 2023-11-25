import React from 'react';
import './style.css';

const Privadome = () => {
  return (
    <div className="full-page">
      <div className="sub-page">
        <div className="navigation-bar">
          <div className="logo">
            <a href="/photography.html">User Login And Registration</a>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-1">
            <div className="form-box">
              <div className="form">
                <form className="login-form">
                  <center><h1 className="main-heading">Login Form</h1></center>
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                  <button type="submit">LOGIN</button>
                  <p className="message">
                    Not Registered? <a href="#">Register</a>
                  </p>
                </form>
              </div>
              <div className="form">
                <form className="register-form">
                  <center><h1 className="main-heading">Register Form</h1></center>
                  <input type="text" placeholder="Username" />
                  <input type="email" placeholder="Email-id" />
                  <input type="password" placeholder="Password" />
                  <button type="submit">REGISTER</button>
                  <p className="message">
                    Already Registered?<a href="#">Login</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="col-1">
            {/* Content for the second column */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privadome;

