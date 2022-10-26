import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage } from '../ErrorMessage';
import { useRegisterUser } from '../../hooks/useRegisterUser';


export const RegisterForm = () => {

  const usernameRef = useRef();
  const emailRef = useRef();
  const createPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const { registerUser, loading, error } = useRegisterUser();


  const handleSubmit = (e) => {
    e.preventDefault();

    const areInputsReferenced = usernameRef && emailRef && createPasswordRef && confirmPasswordRef;

    if (areInputsReferenced) {

      const data = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        createPassword: createPasswordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value
      }

      registerUser(data);
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Nome</span>
        <input
          ref={usernameRef}
          type="text"
          name="username"
          placeholder="informe seu nome"
          minLength="4"
          maxLength="50"
          autoFocus
          required
        />
      </label>
      <label>
        <span>E-mail</span>
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="informe seu email"
          required
        />
      </label>
      <label>
        <span>Criar senha</span>
        <input
          ref={createPasswordRef}
          type="password"
          name="password"
          placeholder="crie uma senha"
          required
        />
      </label>
      <label>
        <span>Confirmar senha</span>
        <input
          ref={confirmPasswordRef}
          type="password"
          name="password"
          placeholder="confirme sua senha"
          required
        />
      </label>
      <div className="redirect-user">
        <span>Já tem uma conta? <Link to="/login">Faça o login!</Link></span>
      </div>
      {error &&
        <ErrorMessage message={error} />
      }
      <div className="submit-btn-container">
        <button type="submit" disabled={loading && true}>Cadastrar</button>
      </div>
    </form>
  );
}