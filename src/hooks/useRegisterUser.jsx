import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../firebase/config";
import { useState } from "react";
import { useGetAuth } from "./useGetAuth";


export const useRegisterUser = () => {

  const { auth } = useGetAuth();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const registerUser = async (data) => {

    setLoading(true);
    setError(null);

    let registerError;

    const arePasswordsDiferents = data.createPassword !== data.confirmPassword;

    if (arePasswordsDiferents) {
      registerError = "As senhas devem ser iguais.";

      setError(registerError);
      setLoading(false);

      return;
    }

    
    try {

      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.createPassword
      );

      await updateProfile(user, {
        displayName: data.username
      });

    } catch (error) {

      if (error.message.includes("email-already-in-use")) {
        registerError = "Este e-mail já está em uso.";
      } else if (error.message.includes("Password")) {
        registerError = "Sua senha deve conter no mínimo 6 caracteres.";
      } else {
        registerError = "Houve um erro, verifique suas informações ou tente mais tarde.";
      }

      setError(registerError);
      setLoading(false);
    }

    setLoading(false);

  }

  return ({
    registerUser,
    loading,
    error
  })
}