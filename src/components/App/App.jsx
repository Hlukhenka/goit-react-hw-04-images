import { useState, useEffect } from 'react';
import { Grid } from 'react-loader-spinner';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchImages } from 'components/Api/Api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import Notiflix from 'notiflix';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);

  const onSubmit = newSearch => {
    setSearch(newSearch);
    setImages([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(s => s + 1);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!search || !page) return;

      setLoading(true);
      setError(null);

      try {
        const data = await fetchImages(search, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        Notiflix.Notify.failure('Something went wrong, please reload the page');
      }
    };

    fetchData();
  }, [search, page]);

  return (
    <>
      <Searchbar onSubmit={onSubmit} />

      <ImageGallery images={images} />
      {loading && (
        <Grid
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{ justifyContent: 'center' }}
          wrapperClass=""
          visible={true}
        />
      )}

      {images.length !== 0 && !loading && <Button onClick={onLoadMore} />}
    </>
  );
};
