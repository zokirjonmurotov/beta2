import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/home/Home";
import Posts from "./pages/Posts/Posts";
import Users from "./pages/Users/Users";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail/detail"
function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Posts" element={<Posts/>}/>
    <Route path="/Users" element={<Users/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path="/Users/:id" element={<Detail />}/>
  </Routes>
  </>
  )
}

export default App;
