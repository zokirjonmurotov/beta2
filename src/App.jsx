import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/home/Home";
import Posts from "./pages/Posts/Posts";
import Users from "./pages/Users/Users";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail/detail"
import PostDetail from "./pages/Posts/PostDetail";
import Comments from "./pages/Posts/Comments";

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="posts/:postId" element={<PostDetail/>}/>
    <Route path="posts/:postId/comments" element={<Comments />}/>
    <Route path="/Users" element={<Users/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path="/Users/:id" element={<Detail />}/>
  </Routes>
  </>
  )
}

export default App;
