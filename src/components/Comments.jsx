import { useDispatch } from 'react-redux'
import { postAItemAcions } from '../redux/postItemSlice'

const Comments = (props) => {

  const dispatch = useDispatch();
 const likeHandler = () =>{
  console.log("click")
   dispatch(postAItemAcions.totalLikes(props.id))
 }
  return (
    <div>
      <div className="bg-white">
      <ul className='flex justify-around'>
        {

        }
        <button onClick={likeHandler}>Like {props.like}</button>
        <li>{props.comment}</li>
        <li>Share</li>
      </ul>
      </div>

    </div>
  )
}

export default Comments
 