import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import ReactPlayer from 'react-player';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };


  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // useEffect โค้ดที่ทำงานเมื่อ mount หรือ update , แต่ return จะทำงานเมื่อ unmount
    const observer = new IntersectionObserver( // IntersectionObserver = จะสังเกตเมื่อองค์ประกอบที่มีการอ้างอิง videoRef เข้ามาในมุมมอง
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPlaying(true); // เมื่อองค์ประกอบเข้ามาในมุมมอง setIsPlaying จะถูกตั้งค่าเป็น true เพื่อเริ่มเล่นวิดีโอ
        } else {
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.5, // threshold ถูกตั้งค่าเป็น 0.5 ซึ่งหมายถึง 50% ของวิดีโอจะต้องมองเห็นก่อนที่จะเล่น
      }
    );

    if (videoRef.current) { //  สังเกตองค์ประกอบที่มีการอ้างอิง videoRef
      observer.observe(videoRef.current);
    }

    return () => {
      // เมื่อ component ถูก unmount จะ unobserve วิดีโอเพื่อป้องกัน memory leak
      if (videoRef.current) {
        observer.unobserve(videoRef.current); // หยุดการสังเกตเมื่อองค์ประกอบถูกทำลาย
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // ถ้าไม่ใส่ เดียว browser จะ refresh
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: import.meta.env.MY_NAME,
          from_email: form.email,
          to_email: import.meta.env.MY_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={'xl:mt-12 flex xl:flex-row flex-col-reverse gap-5 overflow-hidden '}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:text-cyan-300'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>


      {/* โลกด้านขวา */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] content-center '
      >
        <img src="/test.png" className="xl:scale-[2.8] xl:translate-x-[19rem] md:scale-[2.0] md:translate-x-[12rem] hidden md:flex" />
        <div ref={videoRef} 
          className="absolute xl:left-[135px] xl:top-[170px] xl:h-[420px] xl:w-[480px] 
          md:top-[115px] md:left-[115px] md:h-[295px] md:w-[475px]
          2xl:left-[130px] 2xl:w-[495px] 2xl:h-[420px] 2xl:top-[170px]
          w-full h-[50%]
          "
        >
            {/* ใช้ videoRef.current เพื่อให้ IntersectionObserver สังเกตการณ์ div */}
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=r-TPJDQSqv0' 
              playing={isPlaying}
              loop={true}
              controls={true}
              muted={true} // ปิดเสียง
              width='100%'
              height='100%'
            />
        </div>
        {/* <EarthCanvas /> */}
      </motion.div>


      

    </div>
  );
};

export default SectionWrapper(Contact, "contact");