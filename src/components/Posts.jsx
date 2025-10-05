// import { useContext } from 'react'
import bgImage from '../images/IMG_20230427_183834.jpg'
import Allposts from './Allposts'
// import { postAItemAcions } from '../redux/postItemSlice'
// import PostContext from '../context/posts/postContext'
import { useSelector } from 'react-redux'
import PageWrapper from './animations/SimpleFade'
const Posts = () => {
  // const {posts} = useContext(PostContext)
  const posts = useSelector(state => state.postItem.items)

  return (
    <div>
     <div className="md:flex md:flex-col w-full">
         <div className="flex flex-col mx-3 md:justify-center md:text-9xl my-16 bg-cover bg-center bg-no-repeat  h-auto md:h-64 rounded-2xl" style={{backgroundImage : `url(${bgImage})`}}>
        <p className=" text-white my-16 text-center text-xl font-bold md:text-center md:my-16" >
          Quick Reads 
        </p>
      </div>
      </div>
      {
        posts.map((post, index)=>{
          return <PageWrapper><Allposts post = {post} key={post.id}/></PageWrapper>
        })
      }
    </div>
  )
}

export default Posts
