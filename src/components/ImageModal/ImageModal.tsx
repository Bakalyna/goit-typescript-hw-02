import Modal from "react-modal";
import { ImgData } from '../types';
import {FC} from "react"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

interface ImageModalProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  modalImg: ImgData 
}
const ImageModal:FC<ImageModalProps> = ({ closeModal, modalIsOpen, modalImg }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={modalImg.urls.regular} alt={modalImg.alternative_slugs.en} />
    </Modal>
  );
};
export default ImageModal;
