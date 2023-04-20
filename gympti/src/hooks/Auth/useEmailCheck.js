import { useState } from "react";
import CONFIG from "../../config/config.json";
import axios from "axios";
import CryptoJS from "crypto-js";

export function useEmailCheck() {
  const emailbuttonclick = (e) => {
    alert("click");
  };

  return { emailbuttonclick };
}
