import React from 'react'

function About() {
  return (
    <div className="w-full p-20 text-black  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl ">
      <h1 className="font-['Neue_Montreal'] text-[4.5vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing 
        tech businesses that need to raise funds, sell products, explain
        complex ideas, and hire great people.
        </h1>
        <div className="w-full flex gap-5 mt-20 border-t-[1px]  border-[#727f42]">
        <div className="w-1/2 ">
          <h1 className="text-7xl mt-4">Our Approach</h1>
          <button className="flex gap-10 uppercase items-center px-8 py-4 bg-zinc-900 rounded-full mt-10 text-white">Read More
          <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl mt-4 bg-green-600  "></div>
        </div>
    </div>
  )
}

export default About
