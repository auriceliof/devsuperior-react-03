import { Link } from "react-router-dom";
import './styles.css';

const MovieCatalog = () => {
  return (    
      <div className="moviecatalog-container">
        <div className="moviecatalog-card">
          <h1>Tela listagem de filmes</h1>
        </div>
        <div className="moviecatalog-content">
          <Link to="/movies/1">
            <h5>Acessar /movies/1</h5>
          </Link>
        </div>
        <div className="moviecatalog-content">
          <Link to="/movies/2">
            <h5>Acessar /movies/2</h5>
          </Link>
        </div>
      </div>    
  );
}

export default MovieCatalog;
