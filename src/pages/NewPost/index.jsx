import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { TitleContainer } from './../../components/TitleContainer/index';
import { PostForm } from "../../components/PostForm";


export const NewPost = () => {

  const { insertDocument, loading, error } = useInsertDocument("posts");

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");


  return (
    <main>
      <div className="max-width">
        <TitleContainer
          title="Criar Post"
          description="Crie um novo post e compartilhe seus melhores momentos com a comunidade!"
        />
        <PostForm
          title={title}
          setTitle={setTitle}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          content={content}
          setContent={setContent}
          tags={tags}
          setTags={setTags}
          action={insertDocument}
          loadingState={loading}
          errorMessage={error}
          navigateTo="/"
          buttonText="Postar"
        />
      </div>
    </main>
  );
}