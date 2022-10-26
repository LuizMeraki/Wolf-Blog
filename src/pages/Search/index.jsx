import { useGetQuery } from "../../hooks/useGetQuery";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { PostCard } from "../../components/PostCard";
import { ErrorMessage } from './../../components/ErrorMessage/index';
import { TitleContainer } from './../../components/TitleContainer/index';
import { OutlinedButton } from "../../components/OutlinedButton";


export const Search = () => {

  const { query } = useGetQuery("q");
  const { posts } = useFetchPosts("posts", query);


  return (
    <main>
      <div className="max-width">
        <TitleContainer
          title="Exibindo resultados para:"
          highlightText={`" ${query} "`}
        />
        <div className="posts-container">
          {(posts && posts.length == 0) ? (
            <ErrorMessage
              message="Não foi possível encontrar o que você está buscando, verifique se digitou corretamente ou tente mais tarde."
            />
          ) : (
            posts && posts.map((post) => (
              <PostCard key={post.id} data={post} />
            )))}
        </div>
        <div className="back-home-button-container">
          <OutlinedButton
            buttonText="Voltar para home"
            link="/"
          />
        </div>
      </div>
    </main>
  );
}