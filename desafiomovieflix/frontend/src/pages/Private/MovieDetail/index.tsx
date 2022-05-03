import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewNote from 'components/ReviewNote';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { requestBackend } from 'utils/requests';
import './styles.css';

type urlParams = {
  movieId: string;
};

const MovieDetail = () => {
  
  const { movieId } = useParams<urlParams>();
  
  const [ , setReviews ] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config)
    .then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  return (
    <div className="moviedetail-container">
      <div className="moviedetail-card-movie">
        <div>
          <h1> Tela detalhes do filme </h1>
        </div>
        <div>
          <h1> id: {movieId} </h1>
        </div>
        <div>
          <ReviewForm movieId={movieId} />
        </div>
          <ReviewNote />
      </div>
    </div>
  );
};

export default MovieDetail;
