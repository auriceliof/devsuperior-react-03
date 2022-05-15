import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { hasAnyRoles } from 'utils/auth';
import { requestBackend } from 'utils/requests';
import './styles.css';

type urlParams = {
  movieId: string;
};

const MovieDetail = () => {
  
  const { movieId } = useParams<urlParams>();
  
  const [ reviews, setReviews ] = useState<Review[]>([]);

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
          <h1> Tela detalhes do filme id: {movieId} </h1>
        </div>
        <div>
          {hasAnyRoles(['ROLE_MEMBER']) && (
              <ReviewForm movieId={movieId} />
          )}
        </div>
        <div>
          <ReviewListing reviews={reviews}/>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
