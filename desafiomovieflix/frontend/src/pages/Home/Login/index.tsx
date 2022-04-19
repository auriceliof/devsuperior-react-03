import ButtonIcon from "components/ButtonIcon";
import './styles.css'

const Login = () => {
    return (
        <div className="base-card login-card">
            <div>
                <h1>LOGIN</h1>
            </div>
            <div>
                <div className="base-input">
                    <input type="text" placeholder="Email" />
                </div>
                <div className="base-input">
                    <input type="text" placeholder="Senha"/>
                </div>
            </div>
            <div className="btn-Login">
                <ButtonIcon text="fazer login"/>
            </div>
        </div>
    );
};

export default Login;
