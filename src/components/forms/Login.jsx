import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../redux/postItemSlice"

const Login = () => {

const [logData, setLogData] = useState({
  email :"",
  password : ""
})

const dispatch = useDispatch()

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
    console.log("inside loginSumbit",token)
  } catch (error) {
    console.error("Invalid Credentials")
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
        
    </div>
  )
}

export default Login
