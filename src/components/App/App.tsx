import { useEffect, useState } from 'react';
import { fetchArticles } from '../../article-api';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from '../ImageModal/ImageModal';

import { Images } from '../../types';
import { Status } from '../../types';

export default function App() {
  const [images, setImages] = useState<Images[]>([]);
  const [isLoading, setIsLoading] = useState<Status>(false);
  const [error, setError] = useState<Status>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const [modal, setModal] = useState<Status>(false);

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(false);
    setIsLoading(false);
    setImgUrl("");
  }

  const handleLoadMore = (): void => {
    setPage(page + 1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getArticles() {
      try {
        setIsLoading(true)
        const data = await fetchArticles(query, page);
        setImages((prevArticles): Images[] => {
          return [...prevArticles, ...data]
        })
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getArticles();
  }, [query, page]);
  
  const showModal = (url: string): void => {
    setImgUrl(url);
    setModal(true);
  };

  const closeModal = (): void => {
    setModal(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <b>Opps, there is error...</b>}
      {images.length > 0 && <ImageGallery images={images} onClick={showModal}/>}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
      <LoadMoreBtn addArticle={handleLoadMore}/>
      )}
      <ImageModal image={imgUrl} state={modal} close={closeModal} />
    </>
  )
}
