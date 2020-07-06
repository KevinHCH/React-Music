import React, { useState, useEffect, Fragment, useRef } from "react";
import "./style.css";
import close from "./close.png";

const Modal = ({ show, component }) => {
  const [showModal, setShowModal] = useState(false);
  const modal = useRef();

  const handleModal = (e) => {
    if (modal.current && [...modal.current?.children].includes(e.target))
      return;
    if (e.target !== modal.current) setShowModal(false);
  };
  useEffect(() => {
    if (show) setShowModal(true)

    document.addEventListener("click", handleModal);
  }, [show]);

  return (
    <Fragment>
      {showModal && (
        <div className="modal">
          <div className="modal-background"></div>
          <div className="modal-content" ref={modal}>
            <div className="close" onClick={() => setShowModal(false)}>
              <img src={close} alt="Close" />
            </div>
            {component}
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default Modal;
