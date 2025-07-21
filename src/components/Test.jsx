import {postAItemAcions} from '../redux/postItemSlice'
import { useDispatch, useSelector } from 'react-redux'
const Test = () => {
    const itemState = useSelector(state => state.postItem.items)
    const toggle = useSelector(state => state.postItem.showItem)

    const dispatch = useDispatch();

    const handler = ()=>{
        dispatch(postAItemAcions.fectAllItem())
        dispatch(postAItemAcions.toggleItam())
    }
  return (
    <div>
   <button onClick={handler} className="bg-blue-500 text-white p-2 rounded">
        Fetch Items
      </button>
      { toggle && <div className="bg-white mt-4">
        { itemState.map((item, index) => (
          <div key={index} className="mb-4 border p-3">
            <img src={item.img} alt="post" className="w-32 h-32 object-cover" />
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>}
    </div>
  )
}

export default Test
