import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  
  return (
    // เราสร้างฉาก 3D ที่มีแสงหลายประเภทเพื่อสร้างบรรยากาศ:
      // แสงอ่อนๆ จาก hemisphereLight เพื่อให้แสงพื้นหลังทั่วไป
      // แสงทั่วไปจาก pointLight
      // แสงเน้นและสร้างเงาจาก spotLight


    <mesh>  {/* = ตาข่าย ในที่นี้ ใช้ <mesh> เป็นคอนเทนเนอร์สำหรับไฟ (lights) และโมเดล 3D */}
      <hemisphereLight // จำลองแสงในธรรมชาติ โดยมีแสงจากท้องฟ้าและแสงสะท้อนจากพื้น 
        // intensity={0.15} // กำหนดความเข้มของแสงให้ค่อนข้างอ่อน (15% ของความเข้มสูงสุด)
        intensity={1} 
        // groundColor='black' // กำหนดให้แสงสะท้อนจากพื้นเป็นสีดำ ซึ่งจะทำให้เงามืดขึ้น 
      />  
      <pointLight // แสงที่แผ่ออกจากจุดเดียวในทุกทิศทาง เหมือนหลอดไฟ
        intensity={1} // กำหนดความเข้มแสงเป็นค่าปกติ (100%)
      />
      <spotLight // SpotLight คือไฟฉายที่ส่องเป็นกรวย มักใช้เน้นวัตถุหรือสร้างเงา
        position={[-20, 50, 10]}
        angle={0.12} // มุมของกรวยแสง (ในหน่วย radians) ค่าน้อยหมายถึงลำแสงแคบ
        penumbra={1} // ความนุ่มนวลของขอบกรวยแสง (0 คือคม, 1 คือนุ่มที่สุด)
        intensity={1}
        castShadow // อนุญาตให้ไฟนี้สร้างเงาได้
        shadow-mapSize={1024} // ขนาดของ shadow map ยิ่งสูงยิ่งละเอียด แต่ใช้ทรัพยากรมาก
      />
      <primitive // ใช้เพื่อเพิ่มโมเดล 3D ที่โหลดจากภายนอก (เช่น .gltf, .obj) เข้าสู่ฉาก
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);


  //* โดยสรุป โค้ดนี้ทำให้ isMobile state เป็น true เมื่อความกว้างหน้าจอน้อยกว่าหรือเท่ากับ 500px และเป็น false เมื่อมากกว่า 500px โดยจะอัปเดตค่าทันทีที่ขนาดหน้าจอเปลี่ยนแปลง ทำให้สามารถใช้ isMobile ในการ render UI ที่แตกต่างกันสำหรับอุปกรณ์มือถือและเดสก์ท็อปได้
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches); // ถ้าหน้าจอกว้างน้อยกว่าหรือเท่ากับ 500px, isMobile จะเป็น true
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); // ฟังก์ชัน callback ที่จะถูกเรียกเมื่อ media query มีการเปลี่ยนแปลง , อัปเดต isMobile state ตามค่า event.matches
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange); // เมื่อขนาดหน้าจอเปลี่ยนและทำให้ค่า media query เปลี่ยน, handleMediaQueryChange จะถูกเรียก

    return () => { // ส่วน return () => { ... } เป็น cleanup function ที่จะทำงานเมื่อ component unmount , ส่วนในบล็อก useEffect (ไม่รวม return) จะทำงานเมื่อ component mount
      mediaQuery.removeEventListener("change", handleMediaQueryChange); // ฟังก์ชัน cleanup ที่จะทำงานเมื่อ component unmount  , ลบ event listener เพื่อป้องกัน memory leak
    };
  }, []); // การส่ง array เปล่า [] เป็น dependency ทำให้ effect นี้ทำงานเฉพาะตอน component mount เท่านั้น

  return (
    <Canvas
      frameloop='demand' // โดยปกติ Three.js จะวนลูปการเรนเดอร์อย่างต่อเนื่อง (continuous rendering loop) การตั้งค่า frameloop เป็น 'demand' จะทำให้การเรนเดอร์เกิดขึ้นเฉพาะเมื่อมีการเปลี่ยนแปลง
      shadows // เปิดใช้งานการคำนวณเงาใน Three.js , ทำให้วัตถุในฉากสามารถสร้างและรับเงาได้ เพิ่มความสมจริงให้กับฉาก
      dpr={[1, 2]} // การกำหนด dpr={[1, 2]} ไม่ใช่สิ่งที่จำเป็นเสมอไป  เพราะ Three.js  มีการจัดการค่า dpr โดยอัตโนมัติอยู่แล้ว แต่การกำหนดค่านี้มีข้อดีในบางกรณี เช่น รองรับอุปกรณ์ที่หลากหลาย , มีฉาก 3D ที่ซับซ้อน , ต้องการควบคุมประสิทธิภาพหลีกเลี่ยงปัญหา performance drop บนอุปกรณ์บางรุ่น  สามอย่างนี้ควรกำหนด dpr
      camera={{ position: [20, 3, 5], fov: 25 }} // camera คือสำคัญ เอาไว้ดูว่า เรากำลังมอง 3D จากตำแหน่งไหน , fov = Field of View คือ ความกว้างไกลจากสายตาเรา ค่ายิ่งต่ำจะยิ่งซูมเข้า
      gl={{ preserveDrawingBuffer: true }} // เหมือนใส่เพื่อเพิ่มประสิทธิภาพเฉยๆ = เตรียมพร้อมสำหรับฟีเจอร์เพิ่มเติม เช่น การ capture ภาพ (preserveDrawingBuffer)
    >
      <Suspense fallback={<CanvasLoader />}> 
      {/* Suspense = คอมโพเนนต์หลักที่ห่อหุ้มส่วนของ UI ที่อาจต้องรอการโหลด */}
      {/* fallback={<CanvasLoader />}: prop ที่กำหนดว่าจะแสดงอะไรในขณะที่รอคอมโพเนนต์ภายใน Suspense โหลด ในที่นี้คือ <CanvasLoader /> */}
      {/* Children ของ Suspense: ในที่นี้คือ <OrbitControls> และ <Computers> ซึ่งเป็นคอมโพเนนต์ที่อาจต้องใช้เวลาในการโหลดหรือเรนเดอร์ */}
        <OrbitControls // OrbitControls คือตัวให้เราเลื่อนโมเดลดูได้ แบบพวกเลื่อนซ้าย เลื่อนขวา , ใช้ในการควบคุมมุมมองกล้องในฉาก 3 มิติ
          enableZoom={false} // ไม่ให้ซูม
          maxPolarAngle={Math.PI / 2} // กำหนดมุมในแนวดิ่งสูงสุด (มุม polar) ที่กล้องสามารถหมุนไปได้ Math.PI / 2 เท่ากับ 90 องศา
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />  {/* มีหน้าที่ในการโหลดทรัพยากรล่วงหน้า  ป้องกันการกระตุกหรือการหยุดชะงักที่อาจเกิดขึ้นเมื่อทรัพยากรถูกโหลดในขณะที่ผู้ใช้กำลังมีปฏิสัมพันธ์กับฉาก */}
      {/* <Preload all /> อยู่นอก <Suspense> ซึ่งหมายความว่ามันจะทำงานแม้ในขณะที่ <CanvasLoader /> กำลังแสดงอยู่ --> แต่ถ้า <Preload all /> อยู่ใน <Suspense>, มันจะ "บังคับ" ให้รอจนกว่าทุกอย่างพร้อม */}
    </Canvas>
  );
};

export default ComputersCanvas;