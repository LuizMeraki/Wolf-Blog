import styles from "./style.module.css";
import { OutlinedButton } from "../OutlinedButton";


export const PostCard = ({ data, showMoreInfo }) => {
  return (
    <>
      {data &&
        <div className={styles.card_container}>
          <div className={styles.card_username}>
            <p>{data.username}</p>
          </div>
          <div className={styles.card_photo}>
            <img src={data.imageUrl} alt={data.title} />
          </div>
          <div className={styles.card_title}>
            <h4>{data.title}</h4>
          </div>
          {showMoreInfo &&
            <div className={styles.card_content}>
              <p>{data.content}</p>
            </div>
          }
          {!showMoreInfo &&
            <div className={`${styles.card_details} card-details`}>
              <OutlinedButton 
                buttonText="Ler post"
                link={`/post/${data.id}`}
              />
            </div>
          }
          <div className={styles.card_tags}>
            {data.tags && data.tags.map((tag) => (
              <p key={tag}>#<span>{tag}</span></p>
            ))}
          </div>
        </div>
      }
    </>
  );
}