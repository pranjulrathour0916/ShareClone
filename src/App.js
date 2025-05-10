import './App.css';
// import Home from './components/Home';
import Navbar from './components/Navbar,';
import Posts from './components/Posts';
import PostState from './context/posts/PostState';

import bgImage from '../src/images/tree.jpg'
function App() {
  return (
    <div className='bg-slate-500 min-h-screen h-auto bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bgImage})` }}>
      <Navbar/>
      <PostState>
      {/* <Home/> */}
      <Posts/>
      </PostState>
    
    </div>
  );
}

export default App;
