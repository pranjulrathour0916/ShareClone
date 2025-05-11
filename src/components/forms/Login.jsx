import React from 'react'

const Login = () => {
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
            placeholder="create password"
            className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white py-3"
          />
        </label>
        <button className="bg-white p-2 rounded-2xl hover:text-white hover:bg-blue-900">Submit</button>
      </div>
        
    </div>
  )
}

export default Login
