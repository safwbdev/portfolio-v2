import "./App.css";
import React from "react";
import ProfilePage from "./ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArcadePage from "./ArcadePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/arcade" element={<ArcadePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
