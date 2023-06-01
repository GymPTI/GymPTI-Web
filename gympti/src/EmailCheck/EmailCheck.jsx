import { Link } from "react-router-dom";
import React from "react";
import "../EmailCheck/EmailCheck.style.css";
import { useEmailCheck } from "../hooks/Auth/useEmailCheck";

function EmailCheck() {
  const {
    email,
    certifiedemail,
    onChange,
    emailButtonClick,
    certifiedEmailButtonClick,
  } = useEmailCheck();

  return (
    <div className="EmailCheckBody">
      <div className="AllEmailNextLoginLink">
        <Link to="/login" className="EmailNextLoginLink">
          Login →
        </Link>
      </div>
      <h1 className="EmailCheckLogoName">GymPTI</h1>
      <div>
        <p className="EmailCheckWelcomeMessage">
          본격적인 회원가입 전에 이메일 인증을 완료해주세요!
        </p>
      </div>
      <div className="EmailCheckBox">
        <div className="EmailBox">
          <p className="EmailInputMent">Email</p>
          <input
            className="EmailInputbox"
            type="email"
            value={email}
            onChange={onChange}
            name="email"
            required
          ></input>
        </div>
        <button className="EmailButton" onClick={emailButtonClick}>
          확인
        </button>

        <div className="EmailAuthenticationNumberBox">
          <p className="EmailAuthenticationNumberInputMent">인증번호</p>
          <input
            className="EmailAuthenticationNumberInputbox"
            type="text"
            value={certifiedemail}
            onChange={onChange}
            name="certifiedemail"
            required
          ></input>
        </div>
        <button
          className="EmailAuthenticationNumberButton"
          onClick={certifiedEmailButtonClick}
        >
          인증하기
        </button>
      </div>
    </div>
  );
}

export default EmailCheck;
