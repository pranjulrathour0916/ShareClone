import React from 'react'
import bgImage from '../IMG_20230427_183834.jpg'
const Allposts = () => {
  return (
    <div>
      <div className="md:flex md:flex-col mx-11 md:mx-36">
         <div className="flex flex-col mx-3 md:justify-center md:text-9xl my-16 bg-cover bg-center bg-no-repeat  h-auto md:h-auto md:opacity-80 opacity-90 rounded-2xl" style={{backgroundImage : `url(${bgImage})`}}>
            <div className=' my-7  md:text-2xl mx-6 p-2 font-bold text-white'>
                <h5>Title sfbvk vfsvnsjln jvsjfvn</h5>
            </div>
        <p className=" text-white  text-center text-base md:font-semibold md:text-center " >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, tempore. Porro hic quod id quos nostrum? Iste qui reiciendis voluptatibus a Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora fugiat esse expedita cumque labore placeat hic non adipisci, in id incidunt nulla unde veritatis itaque cum? Eaque, necessitatibus consequuntur. corrupti, nisi porro nemo necessitatibus minus ex quae id.
        </p>
       <div className='text-sm mx-6 p-2 font-bold md:my-8'  >
        <button className='text-yellow-400'>READ MORE</button>
       </div>
      </div>
      </div>
      <div className="md:flex md:flex-col mx-11 md:mx-36">
         <div className="flex flex-col mx-3 md:justify-center md:text-9xl my-16 bg-cover bg-center bg-no-repeat  h-auto md:h-64 md:opacity-80 rounded-2xl" style={{backgroundImage : `url(${bgImage})`}}>
        <p className=" text-white my-16 text-center text-base md:font-semibold md:text-center md:my-16" >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, tempore. Porro hic quod id quos nostrum? Iste qui reiciendis voluptatibus a corrupti, nisi porro nemo necessitatibus minus ex quae id.
        </p>
      </div>
      </div>
      <div className="md:flex md:flex-col mx-11 md:mx-36 min-h-[300px]">
         <div className="flex flex-col mx-3 md:justify-center md:text-9xl my-16 bg-cover bg-center bg-no-repeat  h-auto md:h-64 md:opacity-80 rounded-2xl" style={{backgroundImage : `url(${bgImage})`}}>
        <p className=" text-white my-16 text-center text-base md:font-semibold md:text-center md:my-16" >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, tempore. Porro hic quod id quos nostrum? Iste qui reiciendis voluptatibus a corrupti, nisi porro nemo necessitatibus minus ex quae id.
        </p>
      </div>
      </div>
      <div className="md:flex md:flex-col mx-11 md:mx-36 min-h-[300px]">
         <div className="flex flex-col mx-3 md:justify-center md:text-9xl my-16 bg-cover bg-center bg-no-repeat  h-auto md:h-64 md:opacity-80 rounded-2xl" style={{backgroundImage : `url(${bgImage})`}}>
        <p className=" text-white my-16 text-center text-base md:font-semibold md:text-center md:my-16" >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, tempore. Porro hic quod id quos nostrum? Iste qui reiciendis voluptatibus a corrupti, nisi porro nemo necessitatibus minus ex quae id.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Allposts
