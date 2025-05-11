import React from 'react'
// import bgImage from '../images/IMG_20230427_183834.jpg'
const Allposts = (props) => {
  const {post} = props
  return (
    <div>
      <div className="md:flex md:flex-col mx-11 md:mx-36">
         <div className="flex flex-col mx-3 md:justify-center md:text-9xl my-16 bg-cover bg-center bg-no-repeat  h-auto md:h-auto  rounded-2xl opacity-100 " style={{backgroundImage : `url(${post.img})`}}>
          
            <div className=' my-7  md:text-2xl mx-6 p-2 font-bold text-white'>
                <h5>{post.title}</h5>
            </div>
        <p className=" text-white font-bold text-center text-base md:font-semibold md:text-center " >
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
