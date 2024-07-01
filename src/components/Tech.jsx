
import React from "react";
import { SectionWrapper } from "../hoc";
import { aboutMytech } from "../constants";


import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const MyTechCard = ({ myDataTech }) => {
    // max-h-[90px]
    return (
        <div className={'w-full xl:h-[200px] md:h-[190px] my-10 relative  border-slate-500 border-[1px]'} 
        // style={{ 
        //     border: '2px solid rgba(255, 255, 255, 0.2)', 
        //     background: 'transparent', 
        //     backdropFilter: 'blur(20px)', 
        //     color: '#fff' 
        // }}
        >   
            {/* ชื่อกลุ่มภาษา ขวาล่าง */}
            <div className="absolute bottom-0 right-0 bg-[#042C34] w-[20%] h-[25%] z-100 rounded-tl-[0.7rem]">
                <h2 className="flex justify-center items-center h-full font-bold tracking-wider font-mono text-[90%] sm:text-base md:text-1xl xl:text-2xl ">{myDataTech.name}</h2>
            </div>

            {/* <div className="flex justify-end justify-items-end justify-self-end bg-red-300 h-full w-[20%] ">
            </div> */}
            

            {/* รูปภาพTech */}
            <div className="relative flex items-center h-full pl-6 gap-6 z-10 flex-wrap border-l-indigo-400 py-5">
                {myDataTech.allIcon.map((tech)=>(
                    <img src={tech.img} alt={`img-${tech.id}`} 
                    className="xl:h-[68px] md:h-[58px] max-h-[120px] sm:h-[30px] xs:h-[25px] h-[10px] "
                    />
                    // object-contain
                ))}
                
            </div>


        </div>
    )
};

const Tech = ({ experience }) => {
    return (
    <>
        <motion.div variants={textVariant()}>
            <div className={`${styles.sectionHeadText} mb-10 tracking-wider`}>Tech Skills</div>
        </motion.div>
        {aboutMytech.map((myDataTech, index)=>(
            <MyTechCard 
                key={`${myDataTech.name}-${index}`}
                myDataTech={myDataTech}
                className="bg-red-500"
            />
        ))}


    

    </>
    )
}



export default SectionWrapper(Tech, "tech");