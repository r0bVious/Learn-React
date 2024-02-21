import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModal, setShowModal] = useState(false);
  function handleToggleModalPopUp() {
    setShowModal(!showModal);
  }

  function onClose() {
    setShowModal(false);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopUp}>Open Modal Popup</button>
      {showModal && (
        <Modal
          onClose={onClose}
          body={<div>Passed Body</div>}
          header={<h1>Passed Header</h1>}
          footer={<h1>Passed Footer</h1>}
        />
      )}
    </div>
  );
}
