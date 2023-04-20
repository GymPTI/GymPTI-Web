import React from "react";
import { useEmailCheck } from "../hooks/Auth/useEmailCheck";

function EmailCheck() {
  const { emailbuttonclick } = useEmailCheck();

  return (
    <div>
      <input type="text" required></input>
      <button onClick={emailbuttonclick}>확인</button>
    </div>
  );
}

export default EmailCheck;
