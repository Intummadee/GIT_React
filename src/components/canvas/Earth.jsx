import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45, // Field of View
        near: 0.1, // ระยะห่างระหว่างจุดที่ใกล้ที่สุดที่กล้องสามารถมองเห็นวัตถุได้ , ค่า 0.1 เป็นค่ามาตรฐานที่ใช้กันบ่อย , ถ้าวัตถุอยู่ใกล้กล้องกว่าค่านี้ จะถูกตัดทิ้งไป
        far: 200, // far คือระยะห่างสูงสุดที่กล้องสามารถมองเห็นวัตถุได้ , ค่า 200 เป็นค่ามาตรฐานที่ใช้กันบ่อย , ถ้าวัตถุอยู่ไกลกล้องกว่าค่านี้ จะถูกตัดทิ้งไป
        position: [-4, 3, 6], // ค่า [-4, 3, 6] หมายถึง กล้องจะอยู่ที่ตำแหน่ง x=-4, y=3, z=6
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate // autoRotate เป็น true วัตถุ 3D จะหมุนรอบตัวเองอัตโนมัติ โดยค่าเริ่มต้นจะหมุนรอบแกน Y (แนวตั้ง) ด้วยอัตราเร็ว 2 พาย/นาที
          // เสริมจาก claude.ai 
          // => autoRotateSpeed={0.5} = อัตราเร็วการหมุน (เรดิเยน/วินาที)
          // autoRotateDirection={'ccw'} = ทิศทางการหมุน (cw = ตามเข็ม, ccw = ทวนเข็ม)
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;