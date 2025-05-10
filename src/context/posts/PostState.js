import  { useState } from "react";
import PostContext from "./postContext";
import image1 from "../../images/JK.jpg"
import img2 from "../../images/city.jpg"
import img3 from "../../images/citylight.jpg"
import img4 from "../../images/europe.jpg"


const PostState = (props) => {
  const [age, setAge] = useState("25");

  const intialPosts = [
    {
        "user":"vskdjcjvkgcadvkgcvk",
        "img" : image1,
        "title": "this is title",
        "description" : "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig"
    },
    {
        "user":"vskdjcjvkgcadvkgcvk",
        "img" : img2,
        "title": "this is title",
        "description" : "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig"
    },
    {
        "user":"vskdjcjvkgcadvkgcvk",
        "img" : img3,
        "title": "this is title",
        "description" : "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig"
    },
    {
        "user":"vskdjcjvkgcadvkgcvk",
        "img" : img4,
        "title": "this is title",
        "description" : "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig"
    }
  ]

 const [posts, setPosts] = useState(intialPosts)


  return (<PostContext.Provider value={{age, setAge, posts, setPosts}}>
    {props.children}
    </PostContext.Provider>);
};

export default PostState;
