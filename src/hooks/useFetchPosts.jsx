import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";


export const useFetchPosts = (postsCollection, search) => {

  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {

    setLoading(true);
    setError(null);

    const collectionRef = await collection(db, postsCollection);

    try {

      let queryValue;

      if (search) {
        queryValue = await query(
          collectionRef,
          where("tags", "array-contains", search)
        );
      } else {
        queryValue = await query(collectionRef, orderBy("createdAt", "desc"));
      }

      await onSnapshot(queryValue, (querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
    } catch (error) {
      setError(
        "Houve um erro, verifique suas informações ou tente mais tarde."
      );
      setLoading(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [postsCollection, search]);

  return { posts, loading, error };
};