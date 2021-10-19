import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useEffect } from "react";

import s from "./Modal.module.css";
import { ReactComponent as IconClose } from "../../icon-close.svg";

export default function Modal({ src, onCloseModal, modalRoot }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  return createPortal(
    <>
      <div
        className={s.Overlay}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            onCloseModal();
          }
        }}
      >
        <div className={s.Modal}>
          <img src={src} alt="" width="1200px" height="800px" />
          <button
            className={s.closeModal}
            type="button"
            onClick={() => onCloseModal()}
          >
            <IconClose className={s.IconClose} />
          </button>
        </div>
      </div>
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
