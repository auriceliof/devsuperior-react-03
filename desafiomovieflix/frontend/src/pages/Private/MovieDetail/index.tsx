import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetail = () => {
  
  const { movieId } = useParams<UrlParams>();

  useEffect(() => {}, [movieId]);

  return (
    <div className="moviedetail-container">
      <div className="moviedetail-card-movie">
        <div>
          <h1> Tela detalhes do filme </h1>
        </div>
        <div>
          <h1> id: {movieId} </h1>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
