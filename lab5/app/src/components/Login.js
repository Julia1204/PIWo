import React, { useState,useContext, useEffect, useRef } from "react";
import UserContext from "./service/UserContext";
import UseLocalStorage from "./service/UseLocalStorage";
import { registerWithEmail, logInWithGoogle, logInWithGit, logInWithEmail, useUser, logout} from "../firebase/AuthService.js";
import { signOut } from "firebase/auth";

const Hero = () => {

   const data = useRef();

  // const { user, setNewUser } = useContext(UserContext);


  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    displayName:"",
  });


  const heroComponent = [
    {
      title: "Find your dream home today!",
      subtitle: "Log in and book a house tour with our real estate agent!",
      login: "Login",
      password: "Password",
      displayName: "displayName",
      registerBtn: "Register",
      loginBtn: "Log in with password",
      loginGoogleBtn: "Log in with google",
      loginGitBtn: "Log in with gitHub",
      forgotPsswordBtn: "Forgot Password",
      noAccount: "No account?",
      image: "./assets/hero-image.png",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginWithEmail = () => {
    logInWithEmail(loginData.email, loginData.password);
  };

  const handleRegister = () => {
    registerWithEmail(loginData.email, loginData.password, loginData.displayName);
  };

  const Login = ({ h }) => {
    const user = useUser();
    console.log(user);
    if (user)
      return (
        <button className="btn login-btn" onClick={logout}>
        Log out
       </button>
    )
    
    return(
      <div>
        <div>
          <button className="btn login-btn" onClick={handleLoginWithEmail}>
            {h.loginBtn}
          </button>    
        </div>
        <div>
          <button className="btn login-btn" onClick={logInWithGoogle}>
            {h.loginGoogleBtn}
          </button>
        </div>
       <div>
         <button className="btn login-btn" onClick={logInWithGit}>
           {h.loginGitBtn}
         </button>    
        </div>
      </div>
    );


}

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

                <label>{h.displayName}</label>
                  <input
                    type="text"
                    name="displayName"
                    ref={data}
                    value={loginData.displayName}
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
                      {h.noAccount}    <button className="btn register-btn" onClick={handleRegister}>
                      {h.registerBtn}
                    </button>
                    </p>
                  </div>
                  <div className="forgot-password">
                    <a href="#">{h.forgotPsswordBtn}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-btn-section">
              <Login h={ h }/>
            </div>
          </div>
        </div>
      </section>
    </>
  ));

  return <>{heroComponentDisplay}</>;
};

export default Hero;
