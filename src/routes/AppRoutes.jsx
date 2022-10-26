import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Pages
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { NewPost } from "../pages/NewPost";
import { DashBoard } from "../pages/DashBoard";
import { About } from "../pages/About";
import { UserProfile } from "../pages/UserProfile";
import { Search } from "../pages/Search";
import { PostDetails } from "../pages/PostDetails";
import { EditPost } from "../pages/EditPost";
import { UpdateUserProfile } from "../pages/UpdateUserProfile";


export const AppRoutes = ({ userAuth }) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={userAuth ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={userAuth ? <Navigate to="/" /> : <Login />} />
        <Route path="/new-post" element={userAuth ? <NewPost /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={userAuth ? <DashBoard /> : <Navigate to="/login" />} />
        <Route path="/about" element={<About />} />
        <Route path="user-profile/" element={userAuth ? <UserProfile /> : <Navigate to="/login" />} />
        <Route path="user-profile/edit/" element={userAuth ? <UpdateUserProfile /> : <Navigate to="login" />} />
        <Route path="/search" element={userAuth ? <Search /> : <Navigate to="/login" />} />
        <Route path="/post/:postId" element={userAuth ? <PostDetails /> : <Navigate to="/login" />} />
        <Route path="/post/edit/:postId" element={userAuth ? <EditPost /> : <Navigate to="/login" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}