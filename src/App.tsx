import { useState, useEffect,FC } from 'react';
import './App.css';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import fetchImg from './apiGallery/api-gallery';
import Loader from './components/Loader/Loader';
import { FetchedData,ImgData } from './components/types';

const App:FC=()=> {
  const [query, setQuery] = useState<string>('');
  const [gallery, setGallery] = useState<ImgData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<ImgData|null>(null);

  const loadMore = ():void => {
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = (query:string):void => {
    setGallery([]);
    setCurrentPage(1);
    setQuery(query);
  };

  useEffect(() => {
    if (!query) return;
    async function getImages(): Promise<void> {
      setShowLoader(true);
      try {
        const data:FetchedData = await fetchImg(query, currentPage);
        setGallery((prevGallery) => [...prevGallery, ...data.results]);
        setShowError(data.results.length === 0);
      } catch (error) {
        setShowError(true);
      } finally {
        setShowLoader(false)
      }
    }
    getImages();
  }, [query, currentPage]);

  const visibleLoadMore = gallery.length !== 0;

  function openModal(image:ImgData):void {
    setModalImg(image);
    setModalIsOpen(true);
  }

  function closeModal():void {
    setModalIsOpen(false);
  }

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {showLoader && <Loader />}
      {!showError && <ImageGallery gallery={gallery} openModal={openModal} />}
      {showError && <ErrorMessage />}
      {visibleLoadMore && <LoadMoreBtn loadMore={loadMore} />}
      {modalIsOpen && modalImg && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          modalImg={modalImg}
        />
      )}
    </>
  );
}

export default App;
