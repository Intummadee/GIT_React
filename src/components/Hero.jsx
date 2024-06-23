
import { motion } from "framer-motion"; // สร้างแอนิเมชันและการเปลี่ยนแปลงในองค์ประกอบของ React.
import React from 'react'
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { ConcertoCanvas } from "./canvas"


import { contact } from "../constants"
import { experiences } from "../constants";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      
    
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-darksky' />
          <div className='w-1 sm:h-60 h-40 bg-gradient-to-b from-[#243c5a]' />
          {/* h-40 คือช่วงที่ความกว้างหน้าจอตํ่ากว่า sm เพราะ sm คือ Minimum width 640px หมายความว่า ถ้าไม่ตํ่ากว่า 640 มันจะใช้ค่าที่กำหนดใน sm แต่ถ้าตํ่ากว่าเมื่อไหร่ จะไม่ใช้ของ sm แล้ว แต่จะใช้ของ h-40 */}
        </div>
    
        <div>
            <h3 className="text-secondary mt-5">Welcome</h3>
          <h1 className={`${styles.heroHeadText} text-white cursor-text`}>
            I'm <span className='text-[#028BA9]'>Developer</span>
          </h1>
          

          {/* <p className={`mt-2 flex flex-row bg-red-400`}>
            {contact.map((list) => (
              // <div className="flex w-[1/2] h-full ">
                <a href={list.link}
                  target="_blank"
                  className="cursor-pointer h-[35px] mr-5 bg-black">
                  <img 
                      src={list.img}
                      alt={`icon-${list.id}`}
                      className='w-[100%] h-[100%]'
                  />
                </a>
              // </div>
            ))}
            <br className='sm:block hidden' />
          </p> */}


        </div>
      </div>
      
      <ConcertoCanvas />
      
      


      {/* ไอไอคอนเลื่อนขึ้น เลื่อนลง ด้านล่างคอม */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0], // เลื่อนลงไป 24 pixel
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>



    </section>
  )
}

export default Hero