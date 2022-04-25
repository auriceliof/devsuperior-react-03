import ButtonIcon from 'components/ButtonIcon';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'utils/requests';
import './styles.css';

type FormData = {
  username: string;
  password: string;
}

const Login = () => {

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = ( formData : FormData ) => {
    requestBackendLogin(formData)
    .then(response => {
      console.log('SUCESSO', response);
    })
    .catch(error => {
      console.log('ERRO', error);
    });    
  };

  return (
    <div className="base-card login-card">
      <div>
        <h1>LOGIN</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <input
            {...register('username')}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className='mb-4'>
          <input
            {...register('password')}
            type="password"
            className="form-control base-input"
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="btn-Login">
          <ButtonIcon text="Fazer login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
