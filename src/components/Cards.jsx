import React from 'react'

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5 ">
      <div className="cardcontainer w-1/2 h-[50vh]">
         <div className="card relative w-full flex items-center justify-center rounded-xl h-full bg-[#004D43] ">
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute px-5 py-1 boredr-2 rounded-full  left-10 bottom-10 ">&copy;2019</button>
         </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] items-center w-1/2">
      <div className="card relative flex items-center  rounded-xl justify-center w-1/2 h-full bg-[#212d2b] ">
      <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute px-5 py-1 boredr-2 rounded-full  left-10 bottom-10 ">&copy;2019</button>
      </div>
      <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212d2b] ">
      <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute px-5 py-1 boredr-2 rounded-full  left-10 bottom-10 ">&copy;2019</button>
          </div>
      </div>
    </div>
  )
}

export default Cards
