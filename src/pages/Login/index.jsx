import { TitleContainer } from "../../components/TitleContainer";
import { LoginForm } from "../../components/LoginForm";


export const Login = () => {
  return (
    <main>
      <div className="max-width">
        <TitleContainer
          title="Login"
          description="Entre agora mesmo e venha se atualizar das novidades que estão em nossa comunidade"
        />
        <LoginForm />
      </div>
    </main>
  );
}