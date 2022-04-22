import Note from "./Note";
import Rate from "./Rate";
import './styles.css'

const MovieDetail = () => {
    return (
        <>
            <div className="moviedetail-container">

                <div className="moviedetail-card-movie">
                    <div >
                        <h1>Tela detalhes do filme</h1>
                    </div>
                    <div >
                        <h1>id: 1</h1>
                    </div>
                </div>

                <div>
                    <Rate />
                </div>
                <div>
                    <Note />
                </div>
                
            </div>
        </>
    );
};

export default MovieDetail;
