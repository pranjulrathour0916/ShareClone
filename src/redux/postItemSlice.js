import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import image1 from "../images/IMG_20230427_183834.jpg";
import img2 from "../images/city.jpg";
import img3 from "../images/citylight.jpg";
import img4 from "../images/europe.jpg";
import axios from "axios";

const POST_URL = "http://localhost:5000/api/posts";

const initialItemState = {
  showItem: false,
  status: "idle",
  error: null,
  items: [
    {
      id: "1",
      user: "Pranjul",
      img: image1,
      title: "this is from react redux",
      description:
        "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig",
      likes: 0,
      comments: "Nice1",
    },
    {
      id: "2",
      user: "Aman",
      img: img2,
      title: "this is title",
      description:
        "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig",
      likes: 1,
      comments: "Nice2",
    },
    {
      id: "3",
      user: "Prinshu",
      img: img3,
      title: "this is title",
      description:
        "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig",
      likes: 2,
      comments: "Nice3",
    },
    {
      id: "4",
      user: "Satyam",
      img: img4,
      title: "this is title",
      description:
        "cdblckdablk  hudcha hudauch; ouuh;dnhhuoh;ohdn ;vbivgslvbvbv iv vu wvuig",
      likes: 3,
      comments: "Nice4",
    },
  ],
};
const postItemSlice = createSlice({
  name: "items",

  initialState: initialItemState,
  reducers: {
    fectAllItem(state) {
      console.log(state.items);
    },
    toggleItam(state) {
      state.showItem = !state.showItem;
      console.log(state.showItem);
    },
    totalLikes(state, actions) {
      console.log("works");
      const id = actions.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.likes++;
      }
    },
    comments(state, actions) {
      console.log("comment redux working");
      const id = actions.payload;
      const cmnt = state.items.find((item) => item.id === id);
      if (cmnt) {
        console.log(cmnt.comments);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fectAllPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fectAllPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fectAllPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fectAllPosts = createAsyncThunk("posts/fectAllPosts", async () => {
  const response = await axios.get(`${POST_URL}/allPosts`, {
    headers: {
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhkMzlkNGMwOThjMTc1ZDNiN2VhNmQwIiwiZW1haWwiOiJyYXRoMkBnbWFpbC5jb20ifSwiaWF0IjoxNzU4Njk4ODUxfQ.CZCKT09W4YP8nxWQRuoHaay9RwlW_-CCNvaEEsZVlFA",
    },
  });
  return response.data;
});

export const uploadPost = createAsyncThunk(
  "posts/uploadPost",
  async (newPost) => {
    const response = await axios.post(`${POST_URL}/createBlog`, newPost, {
      headers: {
        'Content-Type': 'application/json',
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhkOGQ1MjFkNjczM2FhNGIzZmE0NmU2IiwiZW1haWwiOiJrYXJhYmlAZ21haWwuY29tIn0sImlhdCI6MTc1OTA0MDkyNH0.L22PCAwp6GCDMmuZKK61yx_rG4ldgttZ8LjPEu-guGY",
      },
    });
    console.log("inside uploadPost");
    console.log(response.data);
    return response.data;
  }
);
export const postAItemAcions = postItemSlice.actions;

export default postItemSlice.reducer;
