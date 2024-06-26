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
                <h2 className={`${styles.sectionHeadText} sm:translate-y-[-2.5rem] xs:translate-y-[-2rem] translate-y-[-1.5rem] `}>What can I do </h2>
            </motion.div>
            
            
            <div className='flex  md:flex-row flex-col md:justify-evenly justify-center px-2'>
                {myServices.map((list, index)=>(
                    <div className='flex-col md:w-[14rem] md:my-0 my-7 flex justify-between'>
                        <div className='w-full flex justify-center'>
                            <img src={list.img} className='h-[8rem] w-[8rem] justify-self-center' />
                        </div>
                        
                        <motion.div variants={fadeIn("", "", 0.4, 1)}>
                            <h1 className='text-[24px] font-bold mt-4 font-mono'>{list.id}</h1>
                        </motion.div>
                        <h5 className='text-secondary text-[14px] pb-7 text-balance'>{list.detail}</h5>

                        {index !== myServices.length - 1 && (
                            <hr className='md:hidden block border-slate-700 ' />
                        )}
                    </div>
                ))}

            </div>

        </div>
        



        


    </>
  )
}

export default SectionWrapper(Service, "service");