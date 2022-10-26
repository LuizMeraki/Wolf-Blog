import { useFetchUserPosts } from "../../hooks/useFetchUserPosts";
import { useAuthContext } from "../../hooks/useAuthContext"
import { PostManager } from "../../components/PostManeger";
import { ErrorMessage } from "../../components/ErrorMessage";
import styles from "./style.module.css";
import { TitleContainer } from './../../components/TitleContainer/index';


export const DashBoard = () => {

  const { userAuth } = useAuthContext();
  const userId = userAuth && userAuth.uid;

  const { posts, error } = useFetchUserPosts("posts", userId);


  return (
    <main>
      <div className="max-width">
        <TitleContainer
          title="DashBoard"
          description="Gerenciador de posts"
        />
        <div className={styles.label_container}>
          <label>Título</label>
          <label>Ações</label>
        </div>
        {error &&
          <ErrorMessage message={error} />
        }
        {(posts && posts.length > 0) ? (
          posts.map((post) => (
            <PostManager
              key={post.id}
              post={post}
            />
          ))
        ) : (
          <ErrorMessage
            message={"Você ainda não possui nenhum post"}
          />
        )
        }
      </div>
    </main>
  );
}