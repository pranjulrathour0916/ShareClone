import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/postItemSlice";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

const [formData, setformData] = useState({
  name : "",
  email : "",
  password :""
})

const dispatch = useDispatch()
const navigate = useNavigate()

const handleChange = (e) =>{
  e.preventDefault()
  const {name , value} = e.target;
  setformData((prevdata)=>({
    ...prevdata, [name] : value
  }))
}

const handleSubmit = async(e)=>{
  e.preventDefault();
  console.log("this submit")
  console.log(formData)
  const payload = {
    name : formData.name,
    email : formData.email,
    password : formData.password
  };
  try {
    const state = await dispatch(signUp(payload)).unwrap();
    if(state === "success")
      navigate('/login')
  } catch (error) {
    console.error("Signup failed")
  }
}
  return (
    <div>
      <div className="flex flex-col items-center mt-20 space-y-3">
        <label htmlFor="Email">
          <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Name
          </span>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder=" fullname"
            className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white py-3"
          />
        </label>
      </div>
       <div className="flex flex-col items-center mt-10 space-y-3">
        <label htmlFor=" Email">
          <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Email
          </span>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder=" exmaple@gamil.com"
            className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white py-3"
          />
        </label>
      </div>
       <div className="flex flex-col items-center mt-10 space-y-3">
        <label htmlFor="Email">
          <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Password
          </span>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="create password"
            className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white py-3"
          />
        </label>
        <button onClick={handleSubmit} type="submit" className="bg-white p-2 rounded-2xl hover:text-white hover:bg-blue-900">Submit</button>
      </div>
        <div className="login flex justify-center mt-4">
          <h2 className="text-white underline">Already have an account ? <Link to="/login" className="text-red-500">Login</Link></h2>
        </div>
    </div>
  );
};

export default SignUp;
