import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import image1 from "../images/IMG_20230427_183834.jpg";
// import img2 from "../images/city.jpg";
// import img3 from "../images/citylight.jpg";
// import img4 from "../images/europe.jpg";
import axios from "axios";

const POST_URL = "http://localhost:5050/api/posts";

const LOG_URL = "http://localhost:5050/api/user";

const initialItemState = {
  showItem: false,
  status: "idle",
  error: null,
  items: [
   
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
      console.log("this is id", id)
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

// For Fetching all Posts 

export const fectAllPosts = createAsyncThunk("posts/fectAllPosts", async () => {
  const response = await axios.get(`${POST_URL}/allPosts`, {
    headers: {
        "auth-token" : localStorage.getItem("token")
    },
  });
  return response.data;
});

// For Blog Creation

export const uploadPost = createAsyncThunk(
  "posts/uploadPost",
  async (newPost) => {
    const response = await axios.post(`${POST_URL}/createBlog`, newPost, {
      headers: {
        'Content-Type': 'application/json',
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhkMzlkNGMwOThjMTc1ZDNiN2VhNmQwIiwiZW1haWwiOiJyYXRoMkBnbWFpbC5jb20ifSwiaWF0IjoxNzU4Njk4ODUxfQ.CZCKT09W4YP8nxWQRuoHaay9RwlW_-CCNvaEEsZVlFA",
      }
    });
    console.log("inside uploadPost");
    console.log(response.data);
    return response.data;
  }
);

export const signUp = createAsyncThunk(
  "posts/signUp", async (newUser) => {
    const response = await axios.post(`${LOG_URL}/signUp`, newUser);
    console.log("inside signUp", response.data);
    if(response)
    {
      return "success"
    }
    else
      return "Error"
  }
)

export const login = createAsyncThunk("posts/login", async (logUser, thunkAPI) => {
 try {
   const response = await axios.post(`${LOG_URL}/login`, logUser)
  console.log("inside login", response.data)
  localStorage.setItem("token",response.data);
  return response.data;
 } catch (error) {
  if(error.response && error.response.status === 400)
  {
    return thunkAPI.rejectWithValue("Inavlid Credentials")
  }
  else
    return thunkAPI.rejectWithValue("Something went wrong")
 }
})
export const postAItemAcions = postItemSlice.actions;

export default postItemSlice.reducer;
