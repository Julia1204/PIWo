import React, { useState,useContext, useEffect, useRef } from "react";
import UserContext from "./service/UserContext";
import UseLocalStorage from "./service/UseLocalStorage";


const Hero = () => {

  const users = [
    {
      id: 1,
      email: "julia@gmail.com",
      password: "123",
      name: "Julia",
      lastName: "Gosciniak",
    },
    {
      id: 2,
      email: "Jan@gmail.com",
      password: "321",
      name: "Jan",
      lastName: "Kowalski",
    },
    {
      id: 3,
      email: "Ala@gmail.com",
      password: "123",
      name: "Ala",
      lastName: "Nowak",
    },
 
  ];

  const data = useRef();

  const { user, setNewUser } = useContext(UserContext);


  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });


  const heroComponent = [
    {
      title: "Find your dream home today!",
      subtitle: "Log in and book a house tour with our real estate agent!",
      login: "Login",
      password: "Password",
      registerBtn: "Register",
      loginBtn: "Log in",
      forgotPsswordBtn: "Forgot Password",
      noAccount: "No account?",
      image: "./assets/hero-image.png",
    },
  ];


  const handleLogin = () => {
    const matchingUser = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );
  
    if (matchingUser) {
      setNewUser(matchingUser);

      setLoginData({
        email: "",
        password: "",
      });

      alert("You're logged in");

      localStorage.setItem("currentUser", JSON.stringify(matchingUser));

    }
    else {
      alert("Incorrect login or password!");
    }
  };
  
  const handleLogout = () => {
    setNewUser(null);
    alert("You're logged out");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const heroComponentDisplay = heroComponent.map((h) => (
    <>
      <section id="home" className="hero-section">
        <div className="hero-img-section">
          <img className="hero-img" src={h.image} />
        </div>
        <div className="login-test">
          <div className="login-section">
            <div className="hero-title">
              <div className="hero-text">
                <h3>{h.title}</h3>
                <p className="hero-subtitle">{h.subtitle}</p>
              </div>
            </div>
            <div className="input-fields-section">
              <div>
                <label>{h.login}</label>
                <input
                  type="text"
                  name="email"
                  ref={data}
                  value={loginData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>{h.password}</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                />
                <div className="login-links">
                  <div className="register-btn">
                    <p>
                      {h.noAccount} <a href="#">{h.registerBtn}</a>
                    </p>
                  </div>
                  <div className="forgot-password">
                    <a href="#">{h.forgotPsswordBtn}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-btn-section">
              {user ? (
                <>
                  <button className="btn login-btn" onClick={handleLogout}>
                    Log out
                  </button>
                </>
              ) : (
                <button className="btn login-btn" onClick={handleLogin}>
                  {h.loginBtn}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  ));

  return <>{heroComponentDisplay}</>;
};

export default Hero;
