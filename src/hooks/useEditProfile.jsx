import { updateProfile } from "firebase/auth";
import { useState } from "react";


export const useEditProfile = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const updateUserProfile = async (auth, data) => {

    setLoading(true);
    setError(null);

    try {

      await updateProfile(auth,
        {
          displayName: data.username,
          photoURL: data.photoURL
        });

    } catch (error) {
      setError("Houve um erro, vefirifique suas informações ou tente mais tarde.");
      setLoading(false);
    }

    setLoading(false);
  }

  return ({ updateUserProfile, loading, error })
}