import { useFetchPost } from "../../hooks/useFetchSinglePost";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { PostCard } from "../../components/PostCard";
import { TitleContainer } from './../../components/TitleContainer/index';
import { OutlinedButton } from "../../components/OutlinedButton";


export const PostDetails = () => {

  const { postId } = useParams();
  const { post, loading, error } = useFetchPost("posts", postId);
  
  window.scrollTo(0, 0);


  return (
    <main>
      <div className="max-width">
        {error &&
          <ErrorMessage message={error} />
        }
        {loading ? (
          <Loading />

        ) : (
          <>
            <TitleContainer title={post && post.title} />
            <div className="posts-container">
              {post &&
                <PostCard
                  key={post.id}
                  data={post}
                  showMoreInfo={true}
                />
              }
            </div>
            <div className="back-home-button-container">
              <OutlinedButton
                buttonText="Voltar para home"
                link="/"
              />
            </div>
          </>
        )
        }
      </div>
    </main>
  );
}