import PropTypes from "prop-types";

import s from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ image, onItemClick }) {
  const { id, webformatURL, largeImageURL } = image;
  return (
    <li className={s.ImageGalleryItem} key={id}>
      <img
        onClick={() => {
          onItemClick(largeImageURL);
        }}
        src={webformatURL}
        alt="Gallery item"
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
  onItemClick: PropTypes.func.isRequired,
};
