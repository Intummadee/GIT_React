
import React from "react";
import { SectionWrapper } from "../hoc";
import { aboutMytech } from "../constants";


import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { div } from "three/examples/jsm/nodes/Nodes.js";



const MyTechCard = ({ myDataTech }) => {
    return (
        <div className="w-full bg-rose-400 h-[100px] mb-8 relative">
            <div className="absolute bottom-0 right-0 bg-[#042C34] w-[20%] h-[40%]">
                <h2 className="flex justify-center align-middle">{myDataTech.name}</h2>
            </div>

        </div>
    )
};

const Tech = ({ experience }) => {
    return (
    <>
        <div className={`${styles.sectionHeadText} mb-10 `}>Tech Skills</div>
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