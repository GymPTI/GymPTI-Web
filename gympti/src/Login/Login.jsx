import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Login.style.css";
import gymptilogo from "../../src/img/gymptilogo.svg";
import { useLogin } from "../hooks/Auth/useLogin";

function Login() {
  const { id, pw, onChange, onSubmit } = useLogin();
  
  return (
    <div className="Loginalldiv">
      <header className="Loginheader">
        <img className="Loginlogoimg" src={gymptilogo} />
      </header>
      <div className="Loginboxborder">
        <form className="Loginform" onSubmit={onSubmit}>
          <div className="Idbox">
            <p className="Idinputment">ID</p>
            <input
              className="Idinputbox"
              type="Text"
              placeholder="아이디를 입력해주세요."
              value={id}
              onChange={onChange}
              name="id"
              required
            ></input>
          </div>
          <div className="Pwbox">
            <p className="Pwinputment">PW</p>
            <input
              className="Pwinputbox"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              name="pw"
              value={pw}
              onChange={onChange}
              required
            ></input>
          </div>
          <div className="Loginkeepstatebox">
            <input
              type="checkbox"
              className="Loginkeepstatecheckbox"
              id="check"
            ></input>
            <label for="check"></label>
            <span className="Loginkeepstatecheckboxment">로그인 상태 유지</span>
          </div>
          <div className="Loginbottonbox">
            <button type="submit" className="Loginbutton">
              로그인
            </button>
          </div>
        </form>
      </div>
      <div className="Optionament">
        <Link to="/findid" style={{ textDecoration: "none" }}>
          <a className="Optionaid" href="">
            아이디 찾기
          </a>
        </Link>
        <span className="Backslash"> | </span>
        <Link to="/findpw" style={{ textDecoration: "none" }}>
          <a className="Optionapw" href="">
            비밀번호 찾기
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Login;
