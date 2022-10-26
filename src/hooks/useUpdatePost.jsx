import { useState } from "react";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";


export const useUpdatePost = (docCollection) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateDocument = async (postId, data) => {

    setLoading(true);
    setError(null);

    let updateDocumentError;

    try {

      const docRef = await doc(db, docCollection, postId);

      const updateDocument = await updateDoc(docRef, data);

    } catch (error) {
      updateDocumentError = "Houve um erro, verifique suas informações ou tente mais tarde.";

      setLoading(false);
      setError(updateDocumentError);

      return;
    }

    setLoading(false);
  }

  return ({
    updateDocument,
    loading,
    error
  })
}