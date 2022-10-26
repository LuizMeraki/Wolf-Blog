import { useFetchPosts } from "../../hooks/useFetchPosts";
import { useAuthContext } from "../../hooks/useAuthContext";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loading } from "../../components/Loading";
import { PostCard } from "../../components/PostCard";
import { SiWolframlanguage } from "react-icons/si";
import styles from "./style.module.css";


export const Home = () => {

  const { userAuth } = useAuthContext();
  const { posts, loading, error } = useFetchPosts("posts");


  return (
    <main>
      <div className="max-width">
        {!userAuth &&
          <div className={styles.alert_message_container}>
            <p>Faça login ou cadastre-se na plataforma para criar e compartilhar suas próprias histórias!</p>
          </div>
        }
        <div className={styles.homeWolfSVG}>
          <SiWolframlanguage />
        </div>
        {error &&
          <ErrorMessage message={error} />
        }
        <div className="posts-container">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <PostCard key={post.id} data={post} />
            ))) : (
            <Loading />
          )}
        </div>
      </div>
    </main>
  );
}