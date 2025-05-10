import './App.css';
// import Home from './components/Home';
import Navbar from './components/Navbar,';
import Posts from './components/Posts';

import bgImage from './fort.jpg'
function App() {
  return (
    <div className='bg-slate-500 min-h-screen h-auto bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bgImage})` }}>
      <Navbar/>
      {/* <Home/> */}
      <Posts/>
    </div>
  );
}

export default App;
