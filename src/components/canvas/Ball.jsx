import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]); // ใช้ hook useTexture จาก @react-three/drei ในการโหลดรูปภาพจาก URL ที่ส่งมาจาก prop imgUrl
  // useTexture มีหน้าที่โหลดและจัดการ texture ต่างๆ ที่จะนำมาใช้กับวัตถุ 3D ในซีน มาดูวิธีการใช้งานกันครับ

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}> 
      {/* ใช้คอมโพเนนต์ Float จาก @react-three/drei เพื่อให้วัตถุมีการเคลื่อนไหวแบบ floating , rotationIntensity กำหนนระดับความรุนแรงของการหมุน , floatIntensity กำหนดระดับความรุนแรงของการขึ้นลง */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/* <ambientLight> และ <directionalLight> เพิ่มการส่องสว่างให้กับวัตถุ 3D โดยใช้ ambient light และ directional light */}
      <mesh // คอมโพเนนต์ mesh สำหรับเรนเดอร์วัตถุ 3D 
        castShadow // castShadow ทำให้วัตถุสร้างเงามืดบนวัตถุอื่น
        receiveShadow // receiveShadow ทำให้วัตถุรับเงามืดจากวัตถุอื่น
        scale={2.75}
      >  
        <icosahedronGeometry args={[1, 1]} /> {/* สร้างรูปทรงเรขาคณิตแบบ icosahedron (ทรงสิบเอ็ดหน้า) โดยกำหนดขนาดเส้นผ่านศูนย์กลางและรัศมีของวงกลม */}
        <meshStandardMaterial // กำหนดวัสดุสำหรับวัตถุ 3D โดยใช้ standard material
          color='#fff8eb'
          polygonOffset // polygonOffset และ polygonOffsetFactor เป็นการตั้งค่าเพื่อหลีกเลี่ยงปัญหาการซ้อนทับของพื้นผิววัตถุ
          polygonOffsetFactor={-5}
          flatShading // flatShading ทำให้พื้นผิวของวัตถุมีลักษณะเรียบ
        />
        <Decal // ใช้คอมโพเนนต์ Decal จาก @react-three/drei แมพรูปภาพที่โหลดมาจาก useTexture ไปที่พื้นผิววัตถุ 3D
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} // rotation กำหนดมุมหมุนของ decal
          scale={1}
          map={decal} // map คือ texture ของรูปภาพที่จะนำมาแมพ
          flatShading // flatShading เช่นเดียวกับในส่วน material
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;