import { motion } from 'framer-motion'
import React from 'react'

function marquee() {
  return (
    
    <div  data-scroll  data-scroll-section data-scroll-speed=".1" className='w-full py-20  rounded-3xl mt-[3.6vw] bg-[#004D43] '>
      <div className='text border-t-2 border-b-2 border-zinc-300 gap-10 overflow-hidden flex whitespace-nowrap '>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5 ,delay:1}} className='text-[22vw] leading-none uppercase pt-8 -mb-[7vw] font-semibold'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5 , delay:1}} className='text-[22vw] leading-none uppercase pt-8 -mb-[7vw]font-semibold'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5 ,delay:1}} className='text-[22vw] leading-none uppercase pt-8  -mb-[7vw] font-semibold'>we are ochi</motion.h1>

      </div>
    </div>
  )
}

export default marquee
