import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { ErrorMessage } from '../ErrorMessage';


export const LoginForm = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const { loginUser, loading, error } = useLogin();


  const handleSubmit = (e) => {
    e.preventDefault();

    const areInputsReferenced = emailRef && passwordRef

    if (areInputsReferenced) {

      const data = {
        email: emailRef.current.value,
        password: passwordRef.current.value
      }

      loginUser(data);
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>E-mail</span>
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="informe seu email"
          autoFocus
          required
        />
      </label>
      <label>
        <span>Senha</span>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="informe sua senha"
          required
        />
      </label>
      <div className="redirect-user">
        <span>Não tem uma conta? <Link to="/register">Cadastre-se agora!</Link></span>
      </div>
      {error &&
        <ErrorMessage message={error} />
      }
      <div className="submit-btn-container">
        <button type="submit" disabled={loading && true}>Entrar</button>
      </div>
    </form>
  );
}