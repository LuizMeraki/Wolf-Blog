import { Link } from "react-router-dom";
import styles from "./style.module.css";


export const OutlinedButton = ({ buttonText, link }) => {
  return (
    <div className={styles.OutlinedButton}>
      <Link to={link}>{buttonText}</Link>
    </div>
  );
}