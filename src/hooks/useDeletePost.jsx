// Hooks
import { useState } from "react";

// DataBase
import { db } from "../firebase/config";

// Firebase
import { doc, deleteDoc } from "firebase/firestore";


export const useDeletePost = (docCollection) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteDocument = async (postId) => {

    setLoading(true);
    setError(null);

    let deleteDocumentError;

    try {

      const deleteDocument = await deleteDoc(doc(db, docCollection, postId));

    } catch (error) {
      deleteDocumentError = "Houve um erro, verifique suas informações ou tente mais tarde.";

      setLoading(false);
      setError(deleteDocumentError);

      return;
    }

    setLoading(false);
  }

  return ({
    deleteDocument,
    loading,
    error
  })
}