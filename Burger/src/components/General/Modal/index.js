import React from "react";
import css from "./style.module.css";
const Modal = (probs) => {
  return (
    <div
      onClick={probs.closeConfirmModal}
      style={{
        transform: probs.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: probs.show ? "1" : "0",
      }}
      className={css.Modal}
    >
      {probs.children}
    </div>
  );
};
export default Modal;
