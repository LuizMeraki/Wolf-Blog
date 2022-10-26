import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, onSnapshot, where } from "firebase/firestore";


export const useFetchUserPosts = (postsCollection, userId) => {

  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const loadData = async () => {

    setLoading(true);
    setError(null);

    const collectionRef = await collection(db, postsCollection);

    try {

      let queryValue

      if (userId) {
        queryValue = await query(
          collectionRef,
          where("userId", "==", userId)
        )
      };

      await onSnapshot(queryValue, (querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
        );
      });

      setLoading(false);

    } catch (error) {
      setError("Houve um erro, verifique suas informações ou tente mais tarde.")
      setLoading(false)
    }
  }


  useEffect(() => {

    loadData();

  }, [postsCollection, userId]);

  return { posts, loading, error }

}