import React from 'react'



import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


import furina from "../../assets_me/furina.webp"


const About = () => {
  return (    
    <div className='flex flex-row'>
      <motion.div variants={textVariant()}
      className='w-[50%] '
      >
        <img src={furina} alt="myImageProfile" className='w-[80%] h-[100%]' />
      </motion.div>


      {/* ฝั่งขวา */}
      <div 
        className='w-[50%]  '
      >
        <motion.div variants={fadeIn("", "", 0.1, 1)}
          className='border-4 w-[280px] flex justify-center '
        >
          <h3 className={'text-white font-black text-[40px] tracking-widest p-3'}>About me</h3>
        </motion.div>
        <motion.div variants={fadeIn("right", "", 0.1, 1)}>
          <p className='text-secondary mt-5 text-[20px] '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magni est minus odit debitis excepturi! Dolore officiis nostrum nisi beatae itaque?
          </p>

          {/* หัวข้อ */}
          <div className='flex flex-row mt-3'>
            <div className='flex-col'>
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
            </div>
          </div>

          {/* ปุ่ม Download Resume */}
          <div className='mt-9'>
            <a 
            className='border-2 rounded-full p-[15px] bg-darksky tracking-wide border-none text-[16px]'
            href="#">Download Resume</a>

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