import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from './../../hooks/useAuthContext';
import { ErrorMessage } from "../ErrorMessage";


export const PostForm = ({
  title,
  setTitle,
  imageUrl,
  setImageUrl,
  content,
  setContent,
  tags,
  setTags,
  action,
  loadingState,
  errorMessage,
  navigateTo,
  buttonText,
  postId
}) => {

  const { userAuth } = useAuthContext();
  const [formError, setFormError] = useState(null);

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);

    if (!title || !imageUrl || !content || !tags) {
      setFormError("Verifique e preencha todos os campos.");

      return;
    }

    const tagsArray = [...new Set(
      tags.split(",").map((tag) => (
        tag.trim().toLowerCase()
      )))];

    if (tagsArray.length > 6) {
      setFormError("Você pode escrever até 6 tags.");

      return;
    }

    try {
      new URL(imageUrl);
    } catch (error) {
      setFormError("Informe uma URL válida.");

      return;
    }

    const data = {
      title,
      imageUrl,
      content,
      tags: tagsArray,
      userId: userAuth.uid,
      username: userAuth.displayName
    }

    if (postId) {
      
      action(postId, data);

    } else {
      
      action(data);
    }

    navigate(navigateTo);
  }


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título</span>
          <input
            type="text"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="seja criativo!"
            required
          />
        </label>
        <label>
          <span>URL da imagem</span>
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            placeholder="insira a URL da sua linda imagem"
            required
          />
        </label>
        {imageUrl &&
          <label>
            <span>Preview da imagem</span>
            <div className="image-preview">
              <p>caso a imagem não carregue, não a envie</p>
              <img src={imageUrl} alt={title} />
            </div>
          </label>
        }
        <label>
          <span>Conteúdo</span>
          <textarea
            name="postContent"
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="insira o conteúdo do post"
            required
          >
          </textarea>
        </label>
        <label>
          <span>Tags</span>
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={e => setTags(e.target.value)}
            placeholder="insira tags separadas por vírgulas ' , '"
            required
          />
        </label>
        {errorMessage || formError &&
          <ErrorMessage message={errorMessage} internalErrorMessage={formError} />
        }
        <div className="submit-btn-container">
          <button type="submit" disabled={loadingState && true}>
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}