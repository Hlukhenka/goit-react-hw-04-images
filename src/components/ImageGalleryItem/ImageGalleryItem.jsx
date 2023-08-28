import { useState } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ less, tag, large }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(prevModalOpen => !prevModalOpen);
  };

  return (
    <Item>
      <Image alt={tag} src={less} onClick={toggleModal} />
      {modalOpen && (
        <Modal src={large} alt={tag} isOpen={true} toggleModal={toggleModal} />
      )}
    </Item>
  );
};
