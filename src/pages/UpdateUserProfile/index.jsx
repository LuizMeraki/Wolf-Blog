import { useState } from 'react';
import { TitleContainer } from '../../components/TitleContainer';
import { useEditProfile } from './../../hooks/useEditProfile';
import { useAuthContext } from '../../hooks/useAuthContext';
import { Loading } from '../../components/Loading';
import { ErrorMessage } from './../../components/ErrorMessage/index';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export const UpdateUserProfile = () => {

  const { userAuth } = useAuthContext();

  const { updateUserProfile, loading, error } = useEditProfile();

  const [username, setUsername] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const navigateProfile = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      photoURL,
    };

    await updateUserProfile(userAuth, data);

    navigateProfile("/user-profile");
  }


  useEffect(() => {

    if (userAuth) {

      setUsername(userAuth.displayName);
      setPhotoURL(userAuth.photoURL);
    }

  }, [userAuth]);


  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TitleContainer title="Editar perfil" />
          <form onSubmit={handleSubmit}>
            <label>
              <span>URL da foto</span>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="informe a URL da sua imagem"
                required
              />
            </label>
            {photoURL &&
              <label>
                <span>Preview da foto</span>
                <div className="image-preview">
                  <p>caso a imagem não carregue, não a envie</p>
                  <img src={photoURL} alt="" />
                </div>
              </label>
            }
            <label>
              <span>Nome</span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="informe seu nome"
                required
              />
            </label>
            {error &&
              <ErrorMessage message={error} />
            }
            <div className="submit-btn-container">
              <button>Atualizar</button>
            </div>
          </form>
        </>
      )}
    </main>
  )
}