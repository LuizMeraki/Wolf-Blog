// Hooks
import { useState, useEffect } from "react";

// Firebase
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";


export const useFetchPost = (postsCollection, postId) => {

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const fetchPost = async () => {

    setLoading(true);
    setError(null);

    try {

      const docRef = await doc(db, postsCollection, postId);
      const docSnap = await getDoc(docRef);

      setPost(docSnap.data());
      setLoading(false);
      
    } catch (error) {
      setError("Houve um erro, verifique suas informações ou tente mais tarde.")
      setLoading(false);
    }
  }

  useEffect(() => {

    fetchPost();

  }, [postsCollection, postId]);

  return { post, loading, error }

}
