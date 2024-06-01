import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

import { FC } from "react";
import { ImageModalProps } from "../../types";

ReactModal.setAppElement('#root');

export const ImageModal: FC<ImageModalProps> = ({ image, state, close }) => {
  return (
    <ReactModal
      isOpen={state}
      onRequestClose={close}
      className={css.modal}
    >
      <img className={css.modalImg} src={image} />
    </ReactModal>
  );
}