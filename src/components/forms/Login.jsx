import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../redux/postItemSlice"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
const [logErrror, setLogError] = useState("")
const [logData, setLogData] = useState({
  email :"",
  password : ""
})
const dispatch = useDispatch()
const navigate = useNavigate()
const handleChange = (e) =>{
    e.preventDefault()
    const {name, value} = e.target
    setLogData((prevdata) => ({
      ...prevdata, [name] : value
    }))
}

const handleSubmit = async (e) =>{
  e.preventDefault()

  const payload ={
    email : logData.email,
    password : logData.password
  }
  try {
    const token = await dispatch(login(payload)).unwrap()
    console.log("inside login Sumbit",token)
    navigate('/')
    
  } catch (error) {
    console.error("Error is ",error)
     setLogError(error)
  }
}
  
  return (
    <div>
      
       <div className="flex flex-col items-center mt-28 space-y-3">
        <label htmlFor=" Email">
          <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Email
          </span>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={logData.email}
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
            onChange={handleChange}
            name="password"
            value={logData.password}
            placeholder="create password"
            className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white py-3"
          />
        </label>
        <button onClick={handleSubmit} type="submit" className="bg-white p-2 rounded-2xl hover:text-white hover:bg-blue-900">Submit</button>
      </div>
      <div className="error flex justify-center mt-3">
        <h1 className="text-red-600 text-lg">{logErrror}</h1>
      </div>
      <div className="signup mt-4 flex justify-center ">
        <h2 className="text-white underline">Don't have an account? <Link className="text-green-600" to="/signUp">SignUP</Link></h2>
      </div>
    </div>
  )
}

export default Login
