import React from "react";
import bgImage from '../IMG_20230427_183834.jpg'
const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-4">
        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          Publish your passions, your way.
        </h3>
        <p className="mt-2 max-w-sm text-gray-700">
          Create a unique and beautiful blog easily.
        </p>
        <button className="bg-yellow-300 p-2 rounded-lg my-4 text-black font-semibold">
          <span className="text-sm">Creat Blog</span>
        </button>
      </div>
      <div className="md:flex md:justify-between">
         <div className="flex flex-col mx-20 my-16 bg-cover bg-center bg-no-repeat max-w-fit h-auto md:h-64 opacity-80 rounded-2xl" style={{backgroundImage : `url(${bgImage})`}}>
        <p className=" text-white my-16" >
          Create a unique and beautiful blog easily.
        </p>
      </div>
        <div className="flex flex-col mx-20 my-16 bg-cover bg-center bg-no-repeat max-w-fit h-auto opacity-80 rounded-2xl" style={{backgroundImage : `url(${bgImage})`}}>
        <p className=" text-white my-16" >
          Create a unique and beautiful blog easily.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Home;
