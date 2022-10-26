import styles from "./style.module.css";


export const TitleContainer = ({ title, description, highlightText }) => {
  return (
    <div className={styles.titleMainContainer}>
      <div className={styles.titleContainer}>
        <h1>{title}</h1>
      </div>
      {description &&
        <div className={styles.descriptionContainer}>
          <p>{description}</p>
        </div>
      }
      {highlightText &&
        <div className={styles.highlightText}>
          <p>{highlightText}</p>
        </div>
      }
    </div>
  );
}