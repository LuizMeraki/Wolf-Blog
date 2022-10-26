import { TitleContainer } from './../../components/TitleContainer/index';
import styles from "./style.module.css";


export const About = () => {
  return (
    <main className={styles.about}>
      <div className="max-width">
        <TitleContainer title="Sobre" />
        <article className={styles.description_container}>
          <p>Este projeto "Mini Blog" foi desenvolvido por
            <a href="https://portfolio-luizmeraki.vercel.app/" target="_blank"> Luiz Meraki </a>
            a fim de colocar em prática  e demonstrar conhecimentos nas tecnologias da minha stack, e neste projeto eu utilizei as seguintes tecnologias e ferramentas:</p>
          <ul>
            <li>JavaScript;</li>
            <li>React;</li>
            <li>React router;</li>
            <li>Context API;</li>
            <li>CSS Modules;</li>
            <li>Firebase;</li>
            <li>Vite;</li>
          </ul>
          <p>Com este projeto, coloquei muito em prática minha lógica com <span className={styles.green_word}>JavaScript,</span> assim como no <span className={styles.green_word}>React</span>, onde pude colocar bastante em prática o uso dos react hooks e, seu compartilhamento de estados com o <span className={styles.green_word}>Context API</span>; lembrando também da biblioteca <span className={styles.green_word}>React Router</span> que eu usei para fazer as rotas da aplicação, onde eu usufrui bastante dos seus recursos.</p>

          <p>Utilizei a ferramenta <span className={styles.green_word}>Vite</span> para criar minha aplicação react, eu o utilizei pois o <span className={styles.green_word}>Vite</span> é uma ferramenta super rápida e prática, nem se compara com o nativo CRA <i>(Create React App)</i> quando se trata de performance.</p>

          <p>No back-end, eu utilizei uma ferramenta gratuita do próprio Goolgle, o <span className={styles.green_word}>Firebase</span>,
            com ele consegui implementar o banco de dados da minha aplicação, onde está guardado todas as informações como: usuários, e-mails, senhas, publicações, etc. Com isso, as informações dos usuários estão guardadas com segurança.</p>

          <p>E para estilizar essa aplicação, utilizei o <span className={styles.green_word}>CSS Modules</span>, pois com ele consigo manter os estilos em cada componente sem vazá-los para outros.</p>
        </article>
        <div className={styles.social_medias_container}>
          <h3>Onde você pode me encontar?</h3>
          <p>Estou deixando aqui as minhas principais redes socias onde você pode entrar em contato comigo!</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/luiz-henrique-dev-frontend/" target="_blank">LinkedIn</a></li>
            <li><a href="https://portfolio-luizmeraki.vercel.app/" target="_blank">Portfólio</a></li>
            <li><a href="https://github.com/LuizMeraki" target="_blank">GitHub</a></li>
            <li><a href="https://www.instagram.com/luizmeraki" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}