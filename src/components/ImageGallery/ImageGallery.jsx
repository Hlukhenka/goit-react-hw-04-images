import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(img => (
        <ImageGalleryItem
          key={img.id}
          less={img.webformatURL}
          large={img.largeImageURL}
          tag={img.tag}
        />
      ))}
    </List>
  );
};
