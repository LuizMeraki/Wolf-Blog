import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { useUpdatePost } from "../../hooks/useUpdatePost";
import { useFetchPost } from "../../hooks/useFetchSinglePost";

import { Loading } from "../../components/Loading";
import { TitleContainer } from './../../components/TitleContainer/index';
import { PostForm } from "../../components/PostForm";


export const EditPost = () => {

  const { postId } = useParams();

  const { post, loading, error } = useFetchPost("posts", postId);
  const { updateDocument, } = useUpdatePost("posts");

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");


  useEffect(() => {

    if (post) {
      setTitle(post.title);
      setImageUrl(post.imageUrl);
      setContent(post.content);

      const tagsArrayToString = post.tags.join(", ")
      setTags(tagsArrayToString);
    }

  }, [post]);


  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TitleContainer
            title="Editando o post:"
            highlightText={`" ${title && title} "`}
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
            action={updateDocument}
            postId={postId}
            loadingState={loading}
            errorMessage={error}
            navigateTo="/dashboard"
            buttonText="Atualizar"
          />
        </>
      )}
    </main>
  );
}