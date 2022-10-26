import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";


export const useInsertDocument = (docCollection) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const insertDocument = async (data) => {

    setLoading(true);
    setError(null);

    let insertDocumentError;

    try {

      const newDocument = {
        ...data,
        createdAt: Timestamp.now()
      };

      const sendDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );

    } catch (error) {
      insertDocumentError = "Houve um erro, verifique suas informações ou tente mais tarde.";

      setLoading(false);
      setError(insertDocumentError);

      return;
    }

    setLoading(false);
  }

  return ({
    insertDocument,
    loading,
    error
  })
}