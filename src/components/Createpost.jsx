import React, { useRef } from "react";

const Createpost = () => {
     const fileInputRef = useRef(null);

     const handleDivClick = () => {
    fileInputRef.current.click(); // Programmatically trigger file input
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      // You can add image preview logic here
    }
  };
  return (
    <div >
      <div className>
        <label>
          <div className="  overflow-hidden rounded shadow-sm md:mx-44 mx-11 mt-32">
            <textarea
              id="Notes"
              className="w-full sm:text-sm dark:bg-gray-900 dark:text-white"
              rows="4" placeholder=" Still Thinking, Start Writing..."
                ></textarea>
            <div className="flex items-center justify-end gap-2 p-1.5">
              <button
                type="button"
                className="rounded border px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-black"
              >
                Clear
              </button>
              <button
                type="button"
                className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-green-700"
              >
                Save
              </button>
               <button
                type="button" onClick={handleDivClick}
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
    </div>
  );
};

export default Createpost;
