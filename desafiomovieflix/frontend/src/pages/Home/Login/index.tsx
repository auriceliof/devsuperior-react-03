import ButtonIcon from 'components/ButtonIcon';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'utils/requests';
import './styles.css';

type FormData = {
  username: string;
  password: string;
}

const Login = () => {

  const [ hasError, setHasError ] = useState(false);

  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

  const onSubmit = ( formData : FormData ) => {
    requestBackendLogin(formData)
    .then(response => {
      setHasError(false);
      console.log('SUCESSO', response);
    })
    .catch(error => {
      setHasError(true);
      console.log('ERRO', error);
    });    
  };

  return (
    <div className="base-card login-card">
      <div>
        <h1>LOGIN</h1>
      </div>
      {hasError && (
        <div className="alert alert-danger">
          <h6>Ocorreu um erro de login!</h6>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <input
            {...register('username', {
              required: 'Campo obrigatório!'
            })}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
        </div>
        <div className='mb-4'>
          <input
            {...register('password', {
              required: 'Campo obrigatório!'
            })}
            type="password"
            className="form-control base-input"
            placeholder="Password"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>
        <div className="btn-Login">
          <ButtonIcon text="Fazer login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
