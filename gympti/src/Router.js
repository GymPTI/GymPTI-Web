import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/Login/Login";
import FindidPage from "./views/Findid/Findid";
import FindpwPage from "./views/Findpw/Findpw";
import MainPage from "./views/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/findid" element={<FindidPage />}></Route>
        <Route exact path="/findpw" element={<FindpwPage />}></Route>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/main" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
