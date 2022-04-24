import ButtonIcon from 'components/ButtonIcon';
import { useForm } from 'react-hook-form';
import './styles.css';

type FormData = {
  email: string;
  password: string;
}

const Login = () => {

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = ( formData : FormData ) => {
    console.log(formData);
  };

  return (
    <div className="base-card login-card">
      <div>
        <h1>LOGIN</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <input
            {...register("email")}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className='mb-4'>
          <input
            {...register("password")}
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
