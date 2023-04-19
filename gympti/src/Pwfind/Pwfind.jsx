import { Link } from "react-router-dom";
import React from "react";
import "./Pwfind.style.css";
import gymptilogo from "../../src/img/gymptilogo.svg";

function Pwfind() {
  return (
    <div classname="Pwfindalldiv">
      <header className="Pwfindheader">
        <img className="Pwfindlogoimg" src={gymptilogo} />
        <div className="Pwfindallment">
          <p className="Pwfindfirstment">비밀번호를 찾으려면</p>
          <p className="Pwfindsecondment">아이디을 입력해주세요.</p>
        </div>
      </header>
      <div>
        <form className="Pwfindallinputbutton">
          <div>
            <input
              type="email"
              className="Pwfindidinput"
              placeholder="아이디를 입력해주세요"
            />
          </div>
          <div>
            <button type="submit" className="Pwfindnextbutton">
              다음
            </button>
          </div>
        </form>
        <div>
          <span>혹시 아이디를 찾고 계신가요?</span>
          <Link to="/findid">
            <span>아이디 찾기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pwfind;
