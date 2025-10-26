import React from "react";
import bgImage from '../../src/images/citylight.jpg'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-4 bg-slate-700 md:mx-96 rounded-full" >
        <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">
          Publish your passions, your way.
        </h3>
        <p className="mt-2 max-w-sm text-white ">
          Create a unique and beautiful blog easily.
        </p>
        <button className="bg-yellow-300 p-2 rounded-lg my-4 text-black font-semibold animate-pulse">
          <span className="text-sm"><Link to="/create">Create Blog</Link></span>
        </button>
      </div>
      <div className="md:flex md:justify-between animate-walk">
         <div className="flex flex-col mx-20 my-16 bg-cover bg-center bg-no-repeat max-w-fit h-auto md:h-64 rounded-2xl" style={{backgroundImage : `url(${bgImage})`}}>
        <p className=" text-white my-16" >
          Create a unique and beautiful blog easily.
        </p>
      </div>
        <div className="flex flex-col mx-20 my-16 bg-cover bg-center bg-no-repeat max-w-fit h-auto rounded-2xl" style={{backgroundImage : `url(${bgImage})`}}>
        <p className=" text-white my-16" >
          Create a unique and beautiful blog easily.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Home;
