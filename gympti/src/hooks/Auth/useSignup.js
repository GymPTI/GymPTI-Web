import { useState } from "react";
import CONFIG from "../../config/config.json";
import axios from "axios";
import CryptoJS from "crypto-js";

export function useSignup() {
  const [id, SetId] = useState("");
  const [pw, SetPw] = useState("");
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");

  const onChange = (e) => {
    if (e.target.name === "id") SetId(e.target.value);
    if (e.target.name === "pw") SetPw(e.target.value);
    if (e.target.name === "email") SetEmail(e.target.value);
    if (e.target.name === "name") SetName(e.target.value);
  };

  const onSubmit = async (e) => {
    alert("test");
    if (id && pw && email && name) {
      const signupData = {
        userId: id,
        nickname: name,
        email: email,
        password: CryptoJS.SHA512(pw).toString(),
      };
      console.log(signupData);
      try {
        const data = await axios.post(`/auth/register`, signupData);
        console.log(data);
        alert("성공");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return { id, pw, email, name, onChange, onSubmit };
}
