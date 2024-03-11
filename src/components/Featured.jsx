import React from 'react'

function featured() {
  return (
    <div className="w-full py-20  ">
        <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20 ">
         <h1 className='text-7xl tracking-tight'>Featured Projects</h1>
        </div>
        <div className="px-20">
        <div className="cards flex w-full gap-10 mt-10 ">
            <div className="cardcontainer relative w-1/2  h-[75vh]">
              <h1 className="absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2  z-[9] text-[#CDEA68] leading-none text-8xl">FYDE
              {''.split("").map((item,index)=>(<span>{item}</span>))}
              </h1>
                <div className=" card  w-full rounded-xl h-full">
                  <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </div>
            <div className="cardcontainer relative w-1/2 rounded-lg  h-[75vh]">
            <div className=" absolute card w-full rounded-xl h-full ">
            <h1 className="absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2  z-[9] text-[#CDEA68] leading-none text-8xl">VISE
            {''.split("").map((item,index)=>(<span>{item}</span>))}
            </h1>
              <img  className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
            </div>

            </div>
         </div>
        </div>
        
      
    </div>
  )
}

export default featured
