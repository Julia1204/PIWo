import React from "react";

const RegisterForm = ({ registerData, handleInputChange }) => {
    return (
      <div id="register">
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={registerData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={registerData.name}
            onChange={handleInputChange}
          />
        </div>
      </div>
    );
  };
  
  
  export default RegisterForm;
  