import  { useState } from "react";
import PostContext from "./postContext";

const PostState = (props) => {
  const [age, setAge] = useState("25");

  const intialPosts = [
    {
        "user":"vskdjcjvkgcadvkgcvk",
        "img" : "url",
        "title": "this is title",
        "description" : "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig"
    },
    {
        "user":"vskdjcjvkgcadvkgcvk",
        "img" : "url",
        "title": "this is title",
        "description" : "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig"
    },
    {
        "user":"vskdjcjvkgcadvkgcvk",
        "img" : "url",
        "title": "this is title",
        "description" : "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig"
    },
    {
        "user":"vskdjcjvkgcadvkgcvk",
        "img" : "url",
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
