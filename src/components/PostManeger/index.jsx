import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomWarning } from "../CustomWarning";
import { BsTrash } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"
import { FaRegEdit } from "react-icons/fa"
import styles from "./style.module.css";
import { useDeletePost } from './../../hooks/useDeletePost';


export const PostManager = ({ post }) => {

  const [renderWarning, setRenderWarning] = useState(false);
  const { deleteDocument } = useDeletePost("posts");


  return (
    <>
      {renderWarning &&
        <CustomWarning
          action={() => deleteDocument(post.id)}
          setRenderWarning={setRenderWarning}
          warningMessage="Você tem certeza que deseja apagar este post?"
          actionMessage="Sim"
          actionCancellationMessage="Não"
        />
      }
      <div className={styles.post_manager_container}>
        <div className={styles.post_name_container}>
          <p>{post.title}</p>
        </div>
        <div className={styles.actions_container}>
          <Link to={`/post/${post.id}`}>
            <CgMoreO />
          </Link>
          <Link to={`/post/edit/${post.id}`}>
            <FaRegEdit />
          </Link>
          <button onClick={() => setRenderWarning(true)} id={styles.delete_post}>
            <BsTrash />
          </button>
        </div>
      </div>
    </>
  );
}