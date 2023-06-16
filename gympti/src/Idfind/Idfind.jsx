import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Idfind.style.css";
import gymptilogo from "../../src/img/gymptilogo.svg";
import Modal from "../Modal/Idfind.modal";

function Idfind() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading"></Modal>
    </React.Fragment>
  );
}

export default Idfind;
