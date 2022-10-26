import { Link } from "react-router-dom"
import { UserHeaderOptions } from "../UserHeaderOptions";
import styles from "./style.module.css";


export const Header = () => {
  return (
    <header>
      <div className={styles.header_container}>
        <nav className={styles.logo_container}>
          <Link to="/">
            Mini <span className={styles.featuredWordLogo}>Blog</span>
          </Link>
          <UserHeaderOptions />
        </nav>
      </div>
    </header>
  );
}