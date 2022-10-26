import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { useAuthContext } from '../../hooks/useAuthContext';
import styles from "./style.module.css";


export const SearchBar = ({ showMenu, toggleMenuClass }) => {

  const queryRef = useRef();

  const { userAuth } = useAuthContext();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userAuth) {
      navigate("/login");

      queryRef.current.value = "";
    }
    else if (queryRef) {
      navigate(`/search?q=${queryRef.current.value}`);

      queryRef.current.value = "";
    }

    showMenu && toggleMenuClass();
  }


  return (
    <div className={styles.search_post}>
      <form onSubmit={handleSubmit}>
        <input
          ref={queryRef}
          type="search"
          name="searchPost"
          placeholder="pesquise por tags"
          required
        />
        <button type="submit">
          <CiSearch />
        </button>
      </form>
    </div>
  );
}