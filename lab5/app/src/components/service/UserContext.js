import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user:null,
  setNewUser: (val)=>{}
});

export default UserContext;
