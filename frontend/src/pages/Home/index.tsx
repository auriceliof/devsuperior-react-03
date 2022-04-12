import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import TestChildren from 'components/TestChildren';
import { Link } from 'react-router-dom';
import './styles.css'

const Home = () => {
  return (
    <div className="home-container">

      <TestChildren price={234.56}>
        <h2>Conteúdo 1</h2>
        <h2>Conteúdo 2</h2>
      </TestChildren> 

      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça o melhor catalogo de produtos</h1>
            <p>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado</p>
          </div>
          <div>
            <Link to="/products">
              <ButtonIcon text="Inicie agora a sua busca"/>
            </Link>
          </div>
        </div>

        <div className="home-image-container">
          <MainImage />
        </div>

      </div>
    </div>
  );
};

export default Home;
