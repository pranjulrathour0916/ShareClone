import "./App.css";
import Home from './components/Home';
import Posts from "./components/Posts";
import Navbar from "./components/Navbar,"
import '@fortawesome/fontawesome-free/css/all.min.css';
import PostState from "./context/posts/PostState";
import {  Routes, Route, useLocation } from 'react-router-dom';
import bgImage from "../src/images/colour.jpg";
import Login from "./components/forms/Login";
import Createpost from "./components/Createpost";
import PageWrapper from "./components/animations/SimpleFade";
import SignUp from "./components/forms/SignUp";
import { useEffect, useState } from "react";
import LoadingBar from "./components/animations/LoadingBar";
// import Test from "./components/Test";
// import SignUp from "./components/forms/SignUp";
// import Createpost from "./components/Createpost";
function App() {
  const location = useLocation()
  const [key, setkey] = useState(0)

  useEffect(()=>{
    setkey(prev => prev+ 1)
  }, [location.pathname]);
  return (
     
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="relative z-10">
         <LoadingBar key={key} />
        <Navbar/>
        <PostState>
      <Routes>
        <Route path="/" element={<PageWrapper><Home/></PageWrapper>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/create" element={<Createpost />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUp" element={<SignUp />} />   
         <Route path="/login" element={<Login />} />  
      </Routes>
        </PostState>
      </div>
    </div>
  
  );
}

export default App;
