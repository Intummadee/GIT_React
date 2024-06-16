import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef(); // สร้างอ้างอิง (reference) โดยใช้ hook useRef เพื่อเข้าถึงและควบคุมวัตถุ 3D หลังจากที่ถูกสร้างแล้ว
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  // สร้างอาร์เรย์ของจุดสำหรับเรนเดอร์ดวงดาว โดยใช้ฟังก์ชัน random.inSphere จากไลบรารี math-utils ซึ่งจะสร้างจุดสุ่มจำนวน 5,000 จุดบนพื้นผิวของสเฟียร์ที่มีรัศมี 1.2
  // ใช้ hook useState เพื่อเก็บค่าของอาร์เรย์นี้ไว้ในสเตต

  useFrame((state, delta) => {
    // useFrame ถูกเรียกใช้โดยระบบภายในของ @react-three/fiber ในแต่ละเฟรมของการเรนเดอร์ 3D
    // ใช้ hook useFrame จาก @react-three/fiber เมื่อคุณใช้ useFrame และกำหนดฟังก์ชันภายใน ฟังก์ชันนั้นจะถูกเรียกใช้โดยอัตโนมัติในทุกๆ เฟรมของการเรนเดอร์ โดยที่ไม่จำเป็นต้องเรียกใช้จากที่อื่น คุณสามารถใช้มันเพื่ออัปเดตค่าต่างๆ ที่เกี่ยวข้องกับการเคลื่อนไหว การหมุน หรือการแอนิเมชันในซีน 3D ของคุณ
    // ```
    // ในตัวอย่างของคอมโพเนนต์ Stars นั้น useFrame ถูกใช้เพื่ออัปเดตการหมุนของกลุ่มจุด (Points) ในทุกๆ เฟรม โดยฟังก์ชันที่ถูกส่งให้กับ useFrame จะได้รับพารามิเตอร์ state และ delta ซึ่ง:
    // state คือ object ที่มีข้อมูลเกี่ยวกับสถานะของซีนปัจจุบัน เช่น เวลาที่ผ่านไป เฟรมเรต เป็นต้น
    // delta คือช่วงเวลาที่ผ่านไปนับตั้งแต่เฟรมก่อนหน้า ใช้สำหรับคำนวณการเคลื่อนไหวที่สมจริง
    // ```


    // ภายในฟังก์ชัน จะอัปเดตการหมุนของวัตถุ 3D ด้วยการเปลี่ยนแปลงค่า rotation.x และ rotation.y ตามค่า delta ซึ่งเป็นเวลาที่ผ่านไปนับจากเฟรมก่อนหน้า
    ref.current.rotation.x -= delta / 10; // ref.current.rotation.x อ้างอิงการหมุน
    ref.current.rotation.y -= delta / 15;
    // ฟังก์ชันนี้จะถูกเรียกใช้ในทุกๆ เฟรม โดยจะอัปเดตการหมุนของวัตถุ 3D (ที่เก็บไว้ใน ref.current) รอบแกน x และ y ด้วยอัตราที่คำนวณจากค่า delta
  });

  return (
    // คอมโพเนนต์ group ใช้สำหรับรวมวัตถุ 3D เข้าด้วยกัน , กำหนดการหมุนเริ่มต้นของกลุ่มวัตถุด้วยมุม Math.PI / 4 รอบแกน Z
    <group rotation={[0, 0, Math.PI / 4]}> 
      <Points 
      ref={ref} //  ใช้อ้างอิงที่สร้างจาก useRef เพื่อเข้าถึงวัตถุนี้
      positions={sphere} // กำหนดตำแหน่งของจุดจากอาร์เรย์ sphere ที่สร้างไว้ 
      stride={3} // บอกว่ามีค่าพิกัด 3 ค่า (x, y, z) ในอาร์เรย์สำหรับแต่ละจุด
      frustumCulled  // เป็นการเปิดใช้งานการตัดทิ้งจุดที่อยู่นอกพื้นที่มุมมองของกล้อง (frustum culling)
      {...props} // ส่งค่าพร็อพเพอร์ตี้ทั้งหมดจากคอมโพเนนต์ปัจจุบันไปยังคอมโพเนนต์ลูก
      > 
        <PointMaterial
          transparent // transparent ทำให้วัสดุมีความโปร่งแสง
          color='#f272c8'
          size={0.002} // size={0.002} กำหนดขนาดของจุด
          sizeAttenuation={true} // sizeAttenuation={true} ทำให้ขนาดของจุดจะเล็กลงเมื่อห่างจากกล้องมากขึ้น
          depthWrite={false} // depthWrite={false} ป้องกันไม่ให้เขียนค่าความลึกลงในบัฟเฟอร์ความลึก ช่วยในการเรนเดอร์จุดที่ทับซ้อนกัน
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}> {/* null = ไม่แสดงอะไรเลยขณะรอ */}
          {/* fallback={<ComponentToRender />}: แสดง component ที่กำหนดขณะรอ เช่น แสดงสปินเนอร์หรือข้อความบางอย่าง */}
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;