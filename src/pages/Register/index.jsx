import { RegisterForm } from "../../components/RegisterForm";
import { TitleContainer } from '../../components/TitleContainer/';


export const Register = () => {
  return (
    <main>
      <div className="max-width">
        <TitleContainer
          title="Cadastre-se"
          description="Registre-se na plataforma e comece agora mesmo a compartilhar seus momentos com nossa comunidade!"
        />
        <RegisterForm />
      </div>
    </main>
  );
}