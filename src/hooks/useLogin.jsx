import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useGetAuth } from "./useGetAuth";


export const useLogin = () => {

  const { auth } = useGetAuth();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let loginError;

  const loginUser = async (data) => {

    setLoading(true);
    setError(null);

    try {
      
      await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password);

    } catch (error) {

      if (error.message.includes("user-not-found")) {
        loginError = "Usuário não encontrado";
      } 
      else if (error.message.includes("wrong-password")) {
        loginError = "Senha incorreta.";
      } 
      else {
        loginError = "Houve um erro, verifique suas informações ou tente mais tarde.";
      }

      setLoading(false);
    }

    setLoading(false);
    setError(loginError);
  }

  return ({
    loginUser,
    loading,
    error
  })

}