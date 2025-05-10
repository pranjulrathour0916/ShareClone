import React from 'react'
import bgImage from '../IMG_20230427_183834.jpg'
import Allposts from './Allposts'
const Posts = () => {
  return (
    <div>
     <div className="md:flex md:flex-col w-full">
         <div className="flex flex-col mx-3 md:justify-center md:text-9xl my-16 bg-cover bg-center bg-no-repeat  h-auto md:h-64 rounded-2xl" style={{backgroundImage : `url(${bgImage})`}}>
        <p className=" text-white my-16 text-center text-xl font-bold md:text-center md:my-16" >
          Quick Reads
        </p>
      </div>
      </div>
      <Allposts/>
    </div>
  )
}

export default Posts
