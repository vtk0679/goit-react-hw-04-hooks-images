import PropTypes from "prop-types";

import s from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ images, onItemClick }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map((image, i) => {
          return (
            <ImageGalleryItem
              image={image}
              key={image.id + i}
              onItemClick={onItemClick}
            />
          );
        })}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onItemClick: PropTypes.func.isRequired,
};
