import { useState } from "react";
import CONFIG from "../../config/config.json";
import axios from "axios";
import CryptoJS from "crypto-js";

export function useLogin() {
  const [id, SetId] = useState("");
  const [pw, SetPw] = useState("");

  const onChange = (e) => {
    if (e.target.name === "id") SetId(e.target.value);
    else if (e.target.name === "pw") SetPw(e.target.value);
  };

  const onSubmit = async (e) => {
    if (id && pw) {
      const loginData = {
        userId: id,
        password: CryptoJS.SHA512(pw).toString(),
      };
      try {
        const data = await axios.post(`${CONFIG.SERVER}/auth/login`, loginData);
        console.log(data);
        alert("성공");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return { id, pw, onChange, onSubmit };
}
