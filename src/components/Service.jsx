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
        <div className='flex content-center text-center justify-center bg-gradient-to-b from-darkblue to-verydarkblue rounded-[1.5rem] w-full h-auto flex-col'>
            <motion.div variants={textVariant()} className="" >
                <h2 className={`${styles.sectionHeadText} translate-y-[-2.5rem] `}>What can I do </h2>
            </motion.div>
            
            
            <div className='flex flex-row justify-evenly gap-10 '>
                {myServices.map((list)=>(
                    <div className='flex-col '>
                        <div className='w-full flex justify-center'>
                            <img src={list.img} className='h-[8rem] w-[8rem] justify-self-center' />
                        </div>
                        
                        <h1 className='text-[24px] font-bold mt-4 font-mono'>{list.id}</h1>
                        <h5 className='text-secondary text-[14px] pb-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, odio? Perspiciatis .</h5>
                        {/* <div className='text-[4px]'>{list.detail}</div> */}
                    </div>
                ))}

            </div>

        </div>
    </>
  )
}

export default SectionWrapper(Service, "service");