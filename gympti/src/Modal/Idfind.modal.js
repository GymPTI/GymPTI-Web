import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Idfind.modal.style.css";

const Modal = (props) => {
  const { open, close } = props;
  const [isFindId, setIsFindId] = useState(true);

  const toggleMode = () => {
    setIsFindId(!isFindId);
  };

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open && (
        <section>
          <header>
            <div className="AllFind">
              <Link
                to=""
                className={`FindidLink ${isFindId ? "active" : ""}`}
                onClick={() => setIsFindId(true)}
              >
                ID찾기
              </Link>
              <span> | </span>
              <Link
                to=""
                className={`FindpwLink ${!isFindId ? "active" : ""}`}
                onClick={() => setIsFindId(false)}
              >
                PW찾기
              </Link>
            </div>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <p>
              {isFindId
                ? "아이디를 찾기위해 이메일을 입력해주세요:)"
                : "비밀번호를 찾기위해 ID를 입력해주세요:)"}
            </p>
            <div>
              <p>{isFindId ? "Email" : "ID"}</p>
              <input
                placeholder={
                  isFindId ? "이메일을 입력하세요" : "ID를 입력하세요"
                }
              />
            </div>
          </main>
          <footer>
            <button className="close" onClick={close}>
              {isFindId ? "인증번호 보내기" : "다음"}
            </button>
          </footer>
        </section>
      )}
    </div>
  );
};

export default Modal;
