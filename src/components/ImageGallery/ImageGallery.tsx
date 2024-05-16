import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { FC } from 'react';
import { ImgData } from '../types';

interface ImageGalleryProps {
  gallery: ImgData[];
  openModal: (item: ImgData) => void;
}

const ImageGallery:FC<ImageGalleryProps> = ({ gallery, openModal }) => {
  return (
    <ul className={css['image-list']}>
      {gallery.map(item => {
        return (
          <li key={item.id}>
            <ImageCard item={item} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
