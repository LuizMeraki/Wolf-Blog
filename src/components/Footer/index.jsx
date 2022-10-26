import styles from "./style.module.css";


export const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footer} max-width`}>
        <p>&copy; 2022 MiniBlog - Desenvolvido por 
          <a href="https://portfolio-luizmeraki.vercel.app/" target="_blank"> Luiz Meraki</a>
        </p>
      </div>
    </footer>
  );
}