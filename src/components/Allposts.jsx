import React, { useEffect } from 'react'
import Comments from './Comments'
import { useDispatch, useSelector } from 'react-redux'
import { fectAllPosts } from '../redux/postItemSlice'
// import bgImage from '../images/IMG_20230427_183834.jpg'
const Allposts = (props) => {
  const dispatch = useDispatch();
  const itemStatus = useSelector((state)=> state.postItem.status)
  const {post} = props

  useEffect(() => {
    if (itemStatus === 'idle') {
      dispatch(fectAllPosts());
    }
  }, [itemStatus, dispatch]); // Dependency array ensures it runs once (if status is 'idle')

  
  return (
    <div>
      <div className="md:flex md:flex-col  md:mx-36">
         <div className="flex flex-col mx-3 md:justify-center md:text-9xl mt-10 mb-4 bg-cover bg-center bg-fixed bg-no-repeat h-auto md:h-auto  rounded-2xl opacity-100" style={{backgroundImage : `url(${post.image})`}}>
          
            <div className=' my-7  md:text-2xl mx-6 p-2 font-bold text-white'>
                <h5>{post.title}</h5>
            </div>
        <p className=" text-white font-bold text-center text-base md:font-semibold md:text-center " >
          {post.desc}
        </p>
       <div className='text-sm mx-6 p-2 font-bold md:my-8'  >
        <button className='text-yellow-400'>READ MORE</button>
       </div>
     <div className='md:text-lg'>
       <Comments post = {post} />
     </div>
      </div>
      </div>
    </div>
  )
}

export default Allposts
