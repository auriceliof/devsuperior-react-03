import ButtonIcon from "components/ButtonIcon";
import './styles.css'

const Rate = () => {
    return (
        <div className="base-card rate-card">

            <div className="base-input">
                <input type="text" placeholder="Deixe sua avaliação aqui" />
            </div>

            <div className="btn-rate">
                <ButtonIcon text="salvar avaliação"/>
            </div>

        </div>
    );
};

export default Rate;
