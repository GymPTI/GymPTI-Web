import { Link } from "react-router-dom";
import React from "react";
import "../SignUp/Signup.style.css";
import { useSignup } from "../hooks/Auth/useSignup";

function Signup() {
  const { id, pw, email, name, onChange, onSubmit } = useSignup();

  return (
    <div className="SignupBody">
      <div className="AllLoginLink">
        <Link to="/login" className="LoginLink">
          Login →
        </Link>
      </div>
      <h1 className="SignupLogoName">GymPTI</h1>
      <div>
        <p className="SignupWelcomeMessage">
          나만의 AI PT쌤을 만나러 가볼까요?
        </p>
      </div>
      <div className="SignupBox">
        <div className="SignupIdBox">
          <p className="SignupIdInputMent">Id</p>
          <input
            className="SignupIdInputBox"
            type="text"
            placeholder="아이디를 입력하세요"
            value={id}
            onChange={onChange}
            name="id"
            required
          />
        </div>
        <div className="SignupPwBox">
          <p className="SignupPwInputMent">Pw</p>
          <input
            className="SignupPwInputBox"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={pw}
            onChange={onChange}
            name="pw"
            required
          />
        </div>

        <div className="SignupEmailBox">
          <p className="SignupEmailInputMent">Email</p>
          <input
            className="SignupEmailInputBox"
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={onChange}
            name="email"
            required
          />
        </div>

        <div className="SignupNameBox">
          <p className="SignupPwInputMent">Name</p>
          <input
            className="SignupNameInputBox"
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={onChange}
            name="name"
            required
          />
        </div>
        <button className="SignupButton" onClick={onSubmit}>
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default Signup;
