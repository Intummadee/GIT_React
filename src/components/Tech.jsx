
import React from "react";
import { SectionWrapper } from "../hoc";
import { aboutMytech } from "../constants";


import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { div } from "three/examples/jsm/nodes/Nodes.js";



const MyTechCard = ({ myDataTech }) => {
    return (
        <div className={`w-full h-[150px] mb-8 relative
        bg-slate-100
        `}>
            {/* ชื่อกลุ่มภาษา ขวาล่าง */}
            <div className="absolute bottom-0 right-0 bg-[#042C34] w-[20%] h-[40%] z-100">
                <h2 className="flex justify-center items-center h-full ">{myDataTech.name}</h2>
            </div>

            {/* รูปภาพTech */}
            <div className="relative flex items-center h-full pl-6 gap-6 z-10">
                {myDataTech.allIcon.map((tech)=>(
                    <img src={tech.img} alt={`img-${tech.id}`} 
                    className="h-3/5 "
                    />
                ))}
            </div>


        </div>
    )
};

const Tech = ({ experience }) => {
    return (
    <>
        <div className={`${styles.sectionHeadText} mb-10 tracking-wider`}>Tech Skills</div>
        {aboutMytech.map((myDataTech, index)=>(
            <MyTechCard 
                key={`${myDataTech.name}-${index}`}
                myDataTech={myDataTech}
                className="bg-slate-400"
            />
        ))}


    </>
    )
}



export default SectionWrapper(Tech, "");