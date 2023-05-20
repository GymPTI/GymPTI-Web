import { useState } from "react";
import axios from "axios";

export function useEmailCheck() {
  const [email, SetEmail] = useState("");
  const [certifiedemail, SetCertifiedemail] = useState("");
  const onChange = (e) => {
    if (e.target.name === "email") SetEmail(e.target.value);
    if (e.target.name === "certifiedemail") SetCertifiedemail(e.target.value);
  };

  function emailButtonClick(e) {
    alert(email);

    axios
      .post(
        `http://veryhotseo81.duckdns.org:8888/gympti/email/sendMailVerification`,
        {
          email: email,
        },
        { withCredentials: true }
      )
      .then(function (response) {
        let message = response.data.message;
        console.log(message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const certifiedEmailButtonClick = (e) => {
    alert("성공");
    console.log(email);
    console.log(certifiedemail);

    axios
      .post(
        `http://veryhotseo81.duckdns.org:8888/gympti/email/validateMailVerification`,
        {
          email: email,
          emailVerificationCode: certifiedemail,
        },
        { withCredentials: true }
      )
      .then(function (response) {
        let message = response.data.message;
        console.log(message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    email,
    certifiedemail,
    onChange,
    emailButtonClick,
    certifiedEmailButtonClick,
  };
}
