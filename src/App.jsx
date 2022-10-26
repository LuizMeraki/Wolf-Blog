import { AppRoutes } from "./routes/AppRoutes";
import { AuthContextProvider } from "./context/AuthContext";
import { useAuthContext } from "./hooks/useAuthContext";


const App = () => {

  const { userAuth } = useAuthContext();

  return (
    <AuthContextProvider value={userAuth}>
      <AppRoutes userAuth={userAuth} />
    </AuthContextProvider>
  );
}

export default App;