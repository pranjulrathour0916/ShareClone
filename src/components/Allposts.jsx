import React from 'react'
import bgImage from '../IMG_20230427_183834.jpg'
const Allposts = (props) => {
  const {post} = props
  return (
    <div>
      <div className="md:flex md:flex-col mx-11 md:mx-36">
         <div className="flex flex-col mx-3 md:justify-center md:text-9xl my-16 bg-cover bg-center bg-no-repeat  h-auto md:h-auto md:opacity-80 opacity-90 rounded-2xl" style={{backgroundImage : `url(${bgImage})`}}>
            <div className=' my-7  md:text-2xl mx-6 p-2 font-bold text-white'>
                <h5>{post.title}</h5>
            </div>
        <p className=" text-white  text-center text-base md:font-semibold md:text-center " >
          {post.description}
        </p>
       <div className='text-sm mx-6 p-2 font-bold md:my-8'  >
        <button className='text-yellow-400'>READ MORE</button>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Allposts
