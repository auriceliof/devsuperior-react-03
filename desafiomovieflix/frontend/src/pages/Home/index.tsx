import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import { isAuthenticated } from 'utils/auth';
import Login from "./Login";
import './styles.css'

const Home = () => {
    return (
        <>
            <div className="home-container">

                <h1>{isAuthenticated() ? 'Autenticado' : 'NÃO Autenticado'}</h1>

                <div className="home-card-movie">
                    <div className="home-content-container">
                        <h1>Avalie Filmes</h1>
                        <p>Diga o que você achou do seu filme favorito</p>
                    </div>
                    <div className="home-image-container">
                        <MainImage />
                    </div>
                </div>
                <div className="login-form-container">
                    <Login />
                </div>
                
            </div>
        </>
    );
};

export default Home;
