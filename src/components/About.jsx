import React from "react";
import Tilt from 'react-parallax-tilt';// ไอทีทำให้การ์ดเอียงไปมาได้


import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>  {/* คอมโพเนนต์จาก Tilt.js ที่ทำให้องค์ประกอบภายในมีเอฟเฟกต์เอียงเมื่อเอามาวางเหนือ */}
    <motion.div // คอมโพเนนต์จาก Framer Motion ที่ช่วยให้เราสร้างแอนิเมชั่นได้อย่างง่ายดาย
      variants={fadeIn("right", "spring", index * 0.5, 0.75)} // variants = prop กำหนดแอนิเมชั่น
      // right คือทิศทางที่แอนิเมชั่นมา, spring คือประเภทของ animation, index * 0.5 คือหน่วงเวลา, 0.75 คือความเร็วของแอนิเมชั่น
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{ // เป็น ตัวเลือกตอนเรา hover ไปที่ การ์ด
          //  options = prop กำหนดตัวเลือกสำหรับ Tilt เอฟเฟกต์
          max: 45, // max = มุมเอียงสูงสุดเป็น 45 องศา
          scale: 1, // scale: 1 คือไม่ขยายขนาดเมื่อเอียง
          speed: 450, // speed: 450 คือความเร็วของการเอียง
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          // object-contain เป็น CSS property ที่ทำให้ภาพมีขนาดถูกปรับเข้ากับขนาดของ container
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");