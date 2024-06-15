export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
        // ถ้า Y:-50 แล้วพอshowคือจุดปลายทางเป็น0 แสดงว่ามันจะเลื่อนลง ชัวร์!!
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  
  export const fadeIn = (direction, type, delay, duration) => {
    // เก็ตล่่ะ fadeIn ถ้าเป็น variants={fadeIn("", "", 0.1, 1)} คือไม่เข้าเงื่อนไข hidden ตอนแรกเลย มันเลยเหมือนโผล่มาจากอากาศ เพราะตอนแรกตั้งเป็น opacity=0 พอมันโชว์หลังdurationมันก็เลยโผล่ออกมา(Opacity:1)
    // type: ประเภทของแอนิเมชัน เช่น "spring" หรือ "tween"
    return {
      hidden: {
        // hidden กำหนดค่าเริ่มต้นของแอนิเมชัน โดยจะเลื่อน element ไปทางทิศทางที่กำหนดและมีค่า opacity เป็น 0 (ซ่อนอยู่)
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        // show กำหนดค่าสุดท้ายของแอนิเมชัน โดย element จะอยู่ที่ตำแหน่งเดิม (x: 0, y: 0) และมีค่า opacity เป็น 1 (ปรากฏขึ้น)
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut", // ease: ฟังก์ชันสำหรับควบคุมความเร็วของแอนิเมชัน โดยตรงนี้ใช้ "easeOut" ซึ่งจะเริ่มเร็วและค่อยๆ ช้าลงเมื่อใกล้จุดสิ้นสุด
        },
      },
    };
  };
  // ตัวอย่าง fadeIn ด้านบน
  // <motion.div
  //   variants={fadeIn("left", "spring", 0.5, 0.75)}
  //   initial="hidden"
  //   animate="show"
  // >
  //   {/* ... */}
  // </motion.div>
  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    // แสดงผลแบบ staggered (แสดงผลทีละน้อยตามลำดับ) และสามารถหน่วงเวลา (delay) ก่อนที่จะเริ่มแสดงผลได้. 
    return {
      hidden: {}, // สถานะนี้สามารถใช้เพื่อกำหนดลักษณะเริ่มต้นขององค์ประกอบ (ก่อนที่แอนิเมชันจะเริ่ม).
      show: { // สถานะนี้กำหนดลักษณะที่องค์ประกอบจะมีเมื่อแอนิเมชันเริ่ม
        transition: {
          staggerChildren: staggerChildren, // กำหนดเวลาหน่วงก่อนที่แต่ละ children element จะเริ่มแอนิเมชัน.
          // staggerChildren: 0.2 หมายความว่าแต่ละ children element จะเริ่มแอนิเมชันหลังจากที่ children element ก่อนหน้าผ่านไป 0.2 วินาที.
          delayChildren: delayChildren || 0, // กำหนดเวลาหน่วงก่อนที่กลุ่ม children elements จะเริ่มแอนิเมชันทั้งหมด.
        },
      },
    };
  };

  //*  example from chatgpt
  // export const MyComponent = () => {
  //   return (
  //     <motion.div
  //       variants={staggerContainer(0.2, 1)} // กำหนด variants ที่จะใช้
  //       initial="hidden" // สถานะเริ่มต้นเป็น hidden
  //       animate="show"   // สถานะเมื่อแอนิเมชันคือ show
  //     >
  //       <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>Child 1</motion.div>
  //       <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>Child 2</motion.div>
  //       <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>Child 3</motion.div>
  //     </motion.div>
  //   );
  // };