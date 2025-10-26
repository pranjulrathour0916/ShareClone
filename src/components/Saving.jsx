import React from 'react'


const Saving = () => {
  return (
    <div>
  
    <div className='mt-10 relative flex justify-center'>
      <div
  role="alert"
  className="rounded-md border border-gray-300 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-800"
>
  <div className="flex items-start gap-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 text-green-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>

    <div className="flex-1">
      <strong className="font-medium text-gray-900 dark:text-white"> Changes saved </strong>

      <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">
        Your Blog Successfully Uploaded
      </p>
    </div>

    <button
      className="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
      type="button"
      aria-label="Dismiss alert"
    >
      <span className="sr-only">Dismiss popup</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>

    </div>
    </div>
  )
}

export default Saving
