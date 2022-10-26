import { SiWolframlanguage } from "react-icons/si";
import styles from "./style.module.css";


export const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <SiWolframlanguage />
    </div>
  );
}