import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useGetAuth } from "./useGetAuth";


export const useAuthContext = () => {

  const { auth } = useGetAuth();
  const [userAuth, setUserAuth] = useState(null);


  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUserAuth(user);
    })

  }, [auth]);
  

  return (
    {userAuth}
  )
}