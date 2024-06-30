import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { myServices } from "../constants";

import { SectionWrapper } from "../hoc";
import { div } from 'three/examples/jsm/nodes/Nodes.js';
const Service = () => {
  return (
    <>
        <div className='flex content-center text-center justify-center bg-sky w-full h-auto flex-col'>
            <motion.div variants={textVariant()} className="" >
                <h2 className={`${styles.sectionHeadText}`}>Services</h2>
            </motion.div>
            
            <div className='flex flex-row justify-evenly bg-lime-300'>
            {myServices.map((list)=>(
                <div className=' flex-col justify-items-center justify-center justify-self-center bg-rose-400 '>
                    
                    <img src={list.img} className='h-[8rem] w-full bg-fuchsia-700' />
                    
                    <h2>{list.id}</h2>
                    <h5>{list.detail}</h5>
                </div>
            ))}

            </div>

        </div>
    </>
  )
}

export default SectionWrapper(Service, "service");