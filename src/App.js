import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal/Modal";
import getImages from "./services/api";

const modalRoot = document.querySelector("#modal-root");

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [bigImg, setBigImg] = useState(null);

  useEffect(() => {
    if (searchQuery === "") return;
    setLoading(true);
    getImages(searchQuery, page)
      .then((newImages) => {
        if (newImages?.length)
          setImages((oldImages) => [...oldImages, ...newImages]);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [searchQuery, page]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [images]);

  const onSubmit = (newQuery) => {
    if (searchQuery !== newQuery) {
      setSearchQuery(newQuery);
      setImages([]);
      setPage(1);
    }
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} onItemClick={(url) => setBigImg(url)} />
      {loading && <Loader />}
      {images.length > 0 && <Button onLoadMore={onLoadMore} />}
      <ToastContainer autoClose={3000} />
      {bigImg && (
        <Modal
          src={bigImg}
          onCloseModal={() => setBigImg(null)}
          modalRoot={modalRoot}
        />
      )}
    </>
  );
}
