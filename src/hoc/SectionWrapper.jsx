import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
    // Component กับ idName คือไอตรง navbar ที่พอกดเช่น About แล้วมันจะเลื่อนหน้าเว็บลงไปที่ component about อะ
    // StarWrapper จะ return function ชื่อ HOC ไป โดยข้างในย่อยฟังชันนี้ก็คือ component มันก้หลักการสร้างเซ็ตใหญ่ๆ มาห่อหุ้ม component พวก About เราอะ ก็คือ component about จะอยู่ในซับเซตของ Wrapper 
    // เช่น จากที่ปกติจะเขียนเวลา export componentแค่ว่า  export defualt About; ก็เปลี่ยนเป็น --> export default SectionWrapper(About, "about"); เป็นการเอา wrapper มาครอบไว้
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        //  นี่เป็นการกำหนด variant สำหรับแอนิเมชั่น โดยใช้ฟังก์ชัน staggerContainer() จาก Framer Motion ซึ่งน่าจะเป็นฟังก์ชันที่กำหนดแอนิเมชั่นแบบ staggered animation (แอนิเมชั่นที่มีการหน่วงเวลาระหว่างองค์ประกอบแต่ละตัว)
        initial='hidden' // กำหนดสถานะเริ่มต้นของ section เป็น hidden ซึ่งจะทำให้ section ไม่แสดงผลในตอนแรก
        whileInView='show' //  เมื่อ section อยู่ในพื้นที่มุมมองของหน้าจอ (viewport) ให้เปลี่ยนสถานะเป็น show ซึ่งจะทำให้แอนิเมชั่นที่กำหนดไว้ในตอนนั้นเริ่มทำงาน
        viewport={{ once: true, amount: 0.25 }} // ตัวเลือกสำหรับการตรวจสอบว่า section อยู่ในมุมมองหรือไม่ โดย once: true หมายความว่าจะทำงานเพียงครั้งเดียวเท่านั้น และ amount: 0.25 หมายความว่าต้องมีอย่างน้อย 25% ของ section อยู่ในมุมมอง
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        // เว็บไซต์นี้มันจะมีพื้นที่ด้านซ้ายกับด้านขวา เหมือนใช้ container ของ bootstrapเลยใช่ปะ แต่จริงๆ มันคือ stylesตรงนี้ = styles.padding
      >
        <span className='hash-span' id={idName}>
          {/* คลาส hash-span น่าจะถูกใช้เพื่อกำหนดตำแหน่งให้กับ <span> ซึ่งเป็นจุดที่หน้าเว็บจะเลื่อนไปเมื่อผู้ใช้คลิกที่ลิงก์ใน navbar ที่เชื่อมโยงกับ idName. */}
          {/* span คือไอที่อยู่ด้านล่างคอม โมเดลสามมิติอะ ที่พอกด มันจะเลื่อนลงไปหน้า About */}
          {/* ถ้างงลองไปดูใน assets_me รูป 1 and 2 */}
          &nbsp;
          {/* &nbsp; ย่อมาจาก "non-breaking space" ซึ่งเป็นค่าว่างที่ไม่สามารถถูกแบ่งบรรทัดได้ใน HTML. มันถูกใช้เพื่อสร้างช่องว่างที่ไม่ต้องการให้เกิดการแยกบรรทัดขึ้นระหว่างคำหรืออักขระที่ล้อมรอบ */}
        </span>

        <Component />  {/* component ที่โดน wrapper ห่อหุ้มอยู่ */}
      </motion.section>
    );
  };

export default StarWrapper;