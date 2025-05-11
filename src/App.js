import "./App.css";
// import Home from './components/Home';
import Navbar from "./components/Navbar,";
// import Posts from "./components/Posts";
import PostState from "./context/posts/PostState";

import bgImage from "../src/images/colour.jpg";
import Createpost from "./components/Createpost";
function App() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="relative z-10">
        <Navbar />
        <PostState>
          {/* <Posts /> */}
          {/* <Home/> */}
          <Createpost/>
        </PostState>
      </div>
    </div>
  );
}

export default App;
