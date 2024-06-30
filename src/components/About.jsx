import React from 'react'



import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


import furina from "../../assets_me/furina.webp"
import { aboutMyData } from "../constants" 



const About = () => {

  return (    
    <div className='flex md:flex-row  '>
      <motion.div variants={textVariant()}
      className='w-[75%]  md:flex hidden'
      >
        <img src={furina} alt="myImageProfile" className='w-[80%] h-[100%] object-contain' />
      </motion.div>


      {/* ฝั่งขวา */}
      <div 
        className='md:w-[50%] w-full'
      >
        <motion.div variants={textVariant()}
          className='border-4 md:w-[340px] flex sm:w-[260px] xs:w-[200px] w-min '
        >
          <h3 className={`text-white font-black tracking-wider p-3  w-full text-center
            hover:bg-gradient-to-b hover:from-sky 
            md:text-[52px] sm:text-[35px] xs:text-[28px] text-[25px]
            `}>About me</h3>
        </motion.div>
        
        <div className='md:hidden flex justify-center  my-5'>
          <img src={furina} alt="myImageProfile" className='w-[50%] h-[50%] object-contain' />
        </div>

        <motion.div variants={fadeIn("right", "", 0.1, 1)}>
          <p className='text-secondary mt-3 text-[17px] text-pretty '>
          I am an enthusiastic and adaptable software developer with 3 years of coding experience. I am highly passionate about seeking new challenges through my career. I can develop <span className='font-bold text-white '>web apps</span> and <sapn className='font-bold text-white'>mobile applications</sapn> with a passion for designing, developing, and implementing software solutions.
          </p>

          {/* หัวข้อ */}
          {aboutMyData.map((list) => (
            <div class="sm:flex w-4/5 block xs:mt-4 ">
              <div className='w-full sm:w-1/2 font-bold text-sky'>{list.id} :</div>
              <div className=' w-full xs:ml-0 sm:w-1/2  md:bg-rose-950 sm:bg-lime-400 xs:bg-fuchsia-400'>{list.data}</div>
              {/* md:bg-rose-950 sm:bg-lime-400 xs:bg-fuchsia-400 */}
            </div>
          ))}

          {/* ปุ่ม Download Resume */}
          <div className='sm:mt-9 mt-6'>
            <a 
            className={`border-2 rounded-full p-[8px] xs:p-[9px] sm:p-[13px] bg-darksky tracking-wider
            border-none  xs:text-[16px]
             hover:bg-cyan-800 hover:font-extrabold 
            `}
            href="./resume.pdf" target='_blank' ><span className='xs:inline-flex hidden'>Download</span> Resume</a>

          </div>


        </motion.div>

      </div>

      {/* <motion.div variants={fadeIn("", "", 0.1, 1)}>
      <p></p>

      </motion.div> */}

    </div>



  )
}

export default SectionWrapper(About, "about");