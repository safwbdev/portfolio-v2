// import "./App.css";
import React from "react";
import ProfilePage from "./ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArcadePage from "./ArcadePage";
// import { ProfileContext } from "./context/ProfileContext";

function App() {
  return (
    <BrowserRouter>
      {/* <ProfileContext> */}
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/arcade" element={<ArcadePage />} />
      </Routes>
      {/* </ProfileContext> */}
    </BrowserRouter>
  );
}

export default App;
