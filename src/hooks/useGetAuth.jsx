import { getAuth } from "firebase/auth";


export const useGetAuth = () => {

  const auth = getAuth();

  return ({
    auth
  })
}