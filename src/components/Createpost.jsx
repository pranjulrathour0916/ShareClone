import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { uploadPost } from "../redux/postItemSlice";

const Createpost = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

   const [base64String, setBase64String] = useState('');

  const handleDivClick = () => {
    fileInputRef.current.click(); // Programmatically trigger file input

  };

  const handlClear = ()=>{
    setFormData({
      title :"",
      desc : ""
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
    
     const reader = new FileReader();
     reader.onload = () =>{
      const base64 = reader.result;
      setBase64String(base64)
     }
     reader.readAsDataURL(file); 
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
     image: "",
    logUser: "",
    _id: "",
  });
  const handnleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }
  ));
  };
  
  

  const handleFormData = (e) => {
    e.preventDefault();
    const payload = {
        title: formData.title,
        desc: formData.desc, 
        image: base64String, 
        logUser: "",
        _id: "",
    };
    dispatch(uploadPost(payload));
  };
  return (
    <div>
      <form onSubmit={handleFormData}>
        <div className>
          <label>
            <div className="  overflow-hidden rounded shadow-sm md:mx-44 mx-11 mt-32">
              <div className="title my-3">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handnleChange}
                  className="w-2/6 sm:text-sm dark:bg-gray-900 dark:text-white p-2"
                  placeholder="Enter Title of your blog"
                />
              </div>
              <textarea
                id="Notes"
                name="desc"
                value={formData.desc}
                onChange={handnleChange}
                className="w-full sm:text-sm dark:bg-gray-900 dark:text-white"
                rows="4"
                placeholder=" Still Thinking..., Start Writing..."
              ></textarea>
              <div className="flex items-center justify-end gap-2 p-1.5">
                <button
                  type="button"
                  className="rounded border px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-black"
                  onClick={handlClear}
                >
                  Clear
                </button>
                <button
                  type="submit"
                  
                  className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleDivClick}
                  className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-yellow-500"
                >
                  Upload
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Createpost;
