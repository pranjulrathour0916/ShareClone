import { useDispatch, useSelector } from "react-redux";
import { postAItemAcions } from "../redux/postItemSlice";
import { useState } from "react";

const Comments = ({ id }) => {
  const [colour, setColour] = useState(true);
  const [showComment, setShowComment] = useState(false);
  const post = useSelector((state) =>
    state.postItem.items.find((item) => item.id === id)
  );
  const dispatch = useDispatch();
  const likeHandler = () => {
    console.log("click");
    dispatch(postAItemAcions.totalLikes(post.id));
  };
  const handleClick = () => {
    setColour(!colour);
    console.log(colour);
  };
  const handleComment = () => {
    setShowComment(!showComment);
    console.log("comment woprking");
    dispatch(postAItemAcions.comments(post.id));
  };
  return (
    <div>
      <div className="bg-white rounded-lg opacity-80">
        <ul className="flex justify-around">
          <button onClick={likeHandler} className="text-xl">
            <i
              onClick={handleClick}
              className={` ${
                colour
                  ? "fa-regular fa-heart hover:animate-bounce"
                  : "fa-solid fa-heart"
              } text-red-700  `}
            ></i>{" "}
            {post.likes}
          </button>
          <li>
            <i className="fa-regular fa-comments " onClick={handleComment}></i>
          </li>
          <li>
            <i className="fa-regular fa-share-from-square"></i>
          </li>
        </ul>
      </div>
      {showComment && (
        <div className="list bg-white flex-col text-base opacity-80 rounded-lg my-1">
          <ul className="mx-2">
            <div>
              <label htmlFor="Notes">
                <span className="text-lg font-medium text-black dark:text-black">
                  {" "}
                  Add Comment{" "}
                </span>

                <textarea
                  id="Notes"
                  className="mt-0.5 w-full resize-none rounded border-gray-300 shadow-sm sm:text-lg text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                  rows="4"
                ></textarea>
              </label>

              <div className="mt-1.5 flex items-center justify-end gap-2">
                <button
                  type="button"
                  className="rounded border border-transparent px-3 py-1.5 text-sm font-medium text-white bg-slate-950 hover:text-red-600 hover:bg-black"
                >
                  Clear
                </button>

                <button
                  type="button"
                  className="rounded border border-transparent px-3 py-1.5 text-sm font-medium text-white bg-slate-950 hover:text-green-600 hover:bg-black"
                >
                  Save
                </button>
              </div>
            </div>

            <li className="font-bold">{post.user}</li>
            <li>{post.comments} </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Comments;
