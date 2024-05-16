import css from './ImageCard.module.css';
import { ImgData } from "../types"
import {FC} from "react"
  
interface ImageCardProps {
  item: ImgData;
  openModal: (item: ImgData) => void;
}


const ImageCard:FC<ImageCardProps> = ({ item, openModal }) => {
  return (
    <div className={css['image-wrap']}>
      <img
        src={item.urls.small}
        alt={item.alternative_slugs.en}
        onClick={() => {
          openModal(item);
        }}
      />
    </div>
  );
};
export default ImageCard;
