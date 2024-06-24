import React from 'react'



import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


import furina from "../../assets_me/furina.webp"


const About = () => {
  return (    
    <div className='flex flex-row flex-wrap '>
      <motion.div variants={textVariant()}
      className='w-[50%] '
      >
        <img src={furina} alt="myImageProfile" className='w-[80%] h-[100%]' />
      </motion.div>


      {/* ฝั่งขวา */}
      <div 
        className='w-[50%]  '
      >
        <motion.div variants={textVariant()}
          className='border-4 md:w-[330px] flex sm:w-[260px] xs:w-[230px] w-[180px]'
        >
          <h3 className={`text-white font-black tracking-widest p-3 w-full text-center
            hover:bg-gradient-to-b hover:from-sky 
            md:text-[40px] sm:text-[35px] xs:text-[33px] text-[25px]
            `}>About me</h3>
        </motion.div>
        <motion.div variants={fadeIn("right", "", 0.1, 1)}>
          <p className='text-secondary mt-2 text-[17px] '>
          I am an enthusiastic and adaptable software developer with 2 years of coding experience. I am highly passionate about seeking new challenges through my career. I can develop web apps and mobile applications with a passion for designing, developing, and implementing software solutions.
          </p>

          {/* หัวข้อ */}
          <div className='grid grid-cols-2 gap-3 mt-3'>
            <h2>Name</h2>
            <h2>Intummadee Maliyam</h2>
            <h2>Age</h2>
            <h2>22</h2>
            <h2>Nationality</h2>
            <h2>Thai</h2>
            <h2>Experience</h2>
            <h2>3 Years</h2>
            
            {/* <div className='flex-col font-bold'>
              <h2>Name</h2>
              <h2>Age</h2>
              <h2>Nationality</h2>
              <h2>Experience</h2>
            </div>
            <div className='flex-col ml-10'>
              <h2>Intummadee Maliyam</h2>
              <h2>22</h2>
              <h2>Thai</h2>
              <h2>3 Years</h2>
            </div> */}
          </div>

          {/* ปุ่ม Download Resume */}
          <div className='mt-9'>
            <a 
            className={`border-2 rounded-full p-[18px] bg-darksky tracking-wider
            border-none text-[16px] hover:bg-cyan-800 hover:font-extrabold
            `}
            href="#" target="_blank">Download Resume</a>

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