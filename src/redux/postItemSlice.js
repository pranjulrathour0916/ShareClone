import { createSlice } from "@reduxjs/toolkit"
import image1 from "../images/IMG_20230427_183834.jpg"
import img2 from "../images/city.jpg"
import img3 from "../images/citylight.jpg"
import img4 from "../images/europe.jpg"



const initialItemState = {
    
    showItem : false,
    items : [
    {
        "id" : "1",
        "user":"vskdjcjvkgcadvkgcvk",
        "img" : image1,
        "title": "this is from react redux",
        "description" : "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig",
        "likes" : 0,
        "comments" : "Nice1"
    },
    {
        "id" : "2",
        "user":"vskdjcjvkgcadvkgcvk",
        "img" : img2,
        "title": "this is title",
        "description" : "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig",
        "likes" : 1,
        "comments" : "Nice2"
    },
    {
        "id" : "3",
        "user":"vskdjcjvkgcadvkgcvk",
        "img" : img3,
        "title": "this is title",
        "description" : "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig",
        "likes" : 2,
        "comments" : "Nice3"
    },
    {
        "id" : "4",
        "user":"vskdjcjvkgcadvkgcvk",
        "img" : img4,
        "title": "this is title",
        "description" : "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig",
        "likes" : 3,
        "comments" : "Nice4"
    }
  ]
}
  const postItemSlice = createSlice({
    name : "items",
    initialState : initialItemState,
    reducers : {
        fectAllItem (state){
            console.log(state.items)
        },
        toggleItam (state){
        state.showItem = !state.showItem;
        console.log(state.showItem)
    },
    totalLikes( state, actions){
      console.log("works")
      const id = actions.payload
      const item = state.items.find(item => item.id === id)
      if(item)
      {
        item.likes++;
      }
    },
    comments(state, actions){
      console.log("comment redux working")
      const id = actions.payload
      const cmnt = state.items.find(item => item.id === id)
      if(cmnt)
      {
        console.log(cmnt.comments)
      }
    }
  }
})

  export const postAItemAcions = postItemSlice.actions

  export default postItemSlice.reducer;

  