import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent, Image } from 'components/Modal/Modal.styled';

export const Modal = ({ src, alt, isOpen, toggleModal }) => {
  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    const onModalMount = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', onModalMount);

    return () => {
      window.removeEventListener('keydown', onModalMount);
    };
  }, [toggleModal]);

  return createPortal(
    <Overlay onClick={onOverlayClick}>
      <ModalContent isOpen={isOpen}>
        <Image alt={alt} src={src} />
      </ModalContent>
    </Overlay>,
    document.getElementById('modal-root')
  );
};
