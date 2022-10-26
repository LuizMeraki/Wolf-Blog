import { signOut } from "firebase/auth";
import { useGetAuth } from "./useGetAuth";
import { useNavigate } from "react-router-dom";


export const useLogout = () => {

  const { auth } = useGetAuth();
  const navigateHome = useNavigate();


  const logout = () => {
    signOut(auth);

    navigateHome("/");
    window.scrollTo(0, 0);
  }

  return (
    {logout}
  )
}