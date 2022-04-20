import Navbar from 'components/Navbar';
import './styles.css'

const Movie = () => {
  return (
    <>
      <Navbar />

      <div className="movie-container">

          <div className="movie-card">
                <h1>Tela listagem de filmes</h1>
          </div>

          <div className="movie-content">
              <h5>Acessar /movies/1</h5>
              <h5>Acessar /movies/2</h5>
          </div>

      </div>
    </>
  );
};

export default Movie;
