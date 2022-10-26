import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext';

import { SearchBar } from "../SearchBar";
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { BiAddToQueue } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiFillDashboard } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { SlMenu } from 'react-icons/sl';
import styles from "./style.module.css";


export const UserHeaderOptions = () => {

  const { userAuth } = useAuthContext();

  const [showMenu, setShowMenu] = useState(false);
  const showMenuClass = `${styles.nav_links_container} ${styles.active_menu}`;
  const hideMenuClass = `${styles.nav_links_container}`;


  const toggleMenuClass = () => {

    if (!showMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    setShowMenu((prevState) => !prevState);
    window.scrollTo(0, 0);
  }


  return (
    <>
      <div className={showMenu ? showMenuClass : hideMenuClass}>
        <ul>
          <li>
            <SearchBar
              toggleMenuClass={toggleMenuClass}
              showMenu={showMenu}
            />
          </li>
          <li>
            <Link to="/" onClick={showMenu && toggleMenuClass}>
              <AiFillHome />
              <span className={styles.navLinksLabel}>Home</span>
            </Link>
          </li>
          {!userAuth &&
            <>
              <li>
                <Link to="/register" onClick={showMenu && toggleMenuClass}>
                  <AiOutlineUserAdd />
                  <span className={styles.navLinksLabel}>Cadastrar</span>
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={showMenu && toggleMenuClass}>
                  <BiLogIn />
                  <span className={styles.navLinksLabel}>Login</span>
                </Link>
              </li>
            </>
          }
          {userAuth &&
            <>
              <li>
                <Link to="/new-post" onClick={showMenu && toggleMenuClass}>
                  <BiAddToQueue />
                  <span className={styles.navLinksLabel}>Novo post</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={showMenu && toggleMenuClass}>
                  <AiFillDashboard />
                  <span className={styles.navLinksLabel}>DashBoard</span>
                </Link>
              </li>
              <li>
                <Link to="user-profile" onClick={showMenu && toggleMenuClass}>
                  <AiOutlineUser />
                  <span className={styles.navLinksLabel}>Perfil</span>
                </Link>
              </li>
            </>
          }
          <li>
            <Link to="/about" onClick={showMenu && toggleMenuClass}>
              <AiOutlineInfoCircle />
              <span className={styles.navLinksLabel}>Sobre</span>
            </Link>
          </li>
        </ul>
      </div>
      <button
        className={styles.menu_hamburger_container}
        onClick={toggleMenuClass}
      >
        <SlMenu />
      </button>
    </>
  );
}