import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserContext from "./components/service/UserContext";
import UserProvider from "./components/service/UserContext";
import Home from "./HomePage";
import PropertyDetail from "./PropertyDetail";


function App() {
  const [user, setNewUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setNewUser }), [user, setNewUser]);


  return (
    <div className="App">
      <BrowserRouter>

        <UserContext.Provider value={providerValue}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
