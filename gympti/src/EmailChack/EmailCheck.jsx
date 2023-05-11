import React from "react";
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
    <div>
      <input
        type="text"
        value={email}
        onChange={onChange}
        name="email"
        required
      ></input>
      <button onClick={emailButtonClick}>확인</button>
      <div>
        <input
          type="text"
          value={certifiedemail}
          onChange={onChange}
          name="certifiedemail"
          required
        ></input>
        <button onClick={certifiedEmailButtonClick}>인증하기</button>
      </div>
    </div>
  );
}

export default EmailCheck;
