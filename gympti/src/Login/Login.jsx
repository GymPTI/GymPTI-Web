import { Link } from "react-router-dom";
import React from "react";
import "../Login/Login.style.css";
import { useLogin } from "../hooks/Auth/useLogin";

function Login() {
  const { id, pw, onChange, onSubmit } = useLogin();

  return (
    <div className="LoginBody">
      <div className="AllSignupLink">
        <Link to="/emailcheck" className="SignupLink">
          Sign up →
        </Link>
      </div>
      <h1 className="LoginLogoName">GymPTI</h1>
      <div>
        <p className="LoginWelcomeMessage">나만의 AI PT쌤을 만나러 가볼까요?</p>
      </div>
      <div className="LoginBox">
        <div className="LoginIdBox">
          <p className="LoginIdInputMent">Id</p>
          <input
            className="LoginIdInputbox"
            type="text"
            placeholder="아이디를 입력하세요"
            value={id}
            onChange={onChange}
            name="id"
            required
          />
        </div>
        <div className="LoginPwBox">
          <p className="LoginPwInputMent">Pw</p>
          <input
            className="LoginPwInputbox"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={pw}
            onChange={onChange}
            name="pw"
            required
          />
        </div>
        <button className="LoginButton" onClick={onSubmit}>
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default Login;
