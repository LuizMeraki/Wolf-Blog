import { useAuthContext } from './../../hooks/useAuthContext';
import { useLogout } from "../../hooks/useLogout";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomWarning } from './../../components/CustomWarning/index';
import { FaRegEdit } from 'react-icons/fa';
import { GiPowerButton } from 'react-icons/gi';
import Anonymous from "../../assets/anonymous.png";
import stlyes from "./style.module.css";


export const UserProfile = () => {

  const { userAuth } = useAuthContext();
  const { logout } = useLogout();

  const username = userAuth ? userAuth.displayName : "...";
  const userPhoto = userAuth ? userAuth.photoURL : null;

  const [renderWarning, setRenderWarning] = useState(false);


  return (
    <main>
      {renderWarning &&
        <CustomWarning
          action={logout}
          warningMessage="Você tem certeza que deseja sair da conta?"
          setRenderWarning={setRenderWarning}
          actionMessage="Sair"
          actionCancellationMessage="Continuar"
        />
      }
      <div className="max-width">
        <div className={stlyes.userPhotoContainer}>
          <img src={userPhoto ? userPhoto : Anonymous} draggable={false} alt="" />
          <p>{username}</p>
        </div>
        <div className={stlyes.userActions}>
          <Link to="/user-profile/edit/">
            <FaRegEdit />
            <span>Editar</span>
          </Link>
          <button className="red-button" onClick={() => setRenderWarning(true)}>
            <GiPowerButton />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </main>
  );
}