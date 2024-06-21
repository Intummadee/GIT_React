import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Concerto = ({ isMobile }) => {
    // const computer = useGLTF("./concerto/scene.gltf");
    const computer = useGLTF("./stylized_mangrove_greenhouse/scene.gltf");
    return (    
        <mesh> 
          <hemisphereLight 
            intensity={1} 
          />  
          <pointLight 
            intensity={1} 
          />
          <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1} 
            intensity={1}
            castShadow 
            shadow-mapSize={1024} 
          />
          <primitive 
            object={computer.scene}
            scale={isMobile ? 0.7 : 0.75}
            // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
            position={isMobile ? [0, -3, -2.2] : [0, -3.5, -0.7]}
            // แม่ง แกนมันไม่ใช่สี่เหลี่ยมพื้นผ้าอะ x เป็นบวก ไม่ใช่ไปขวา แต่ไปด้านหลังคือถอยห่างออกไป ถ้าติดลบคือยิ่งเข้ามาใกล้หน้าจอ ถ้าอยากให้วัตถุเคลื่อนที่ไปทางขวา คือต้องขยับตำแหน่ง Z กว่าจะตรัสรู้ได้
            // rotation={[-0.01, -0.2, -0.1]}
          />
        </mesh>
      );
};



const ConcertoCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    console.log("isMobile : ", isMobile);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches); 
        const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange); 

    return () => { 
      mediaQuery.removeEventListener("change", handleMediaQueryChange); 
    };
  }, []); 

  return (
    <Canvas
      frameloop='demand' 
      shadows 
      dpr={[1, 2]}
      camera={{ position: [16, -1, 0], fov: 65 }} 
      gl={{ preserveDrawingBuffer: true }} 
    >
      <Suspense fallback={<CanvasLoader />}> 
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <Concerto isMobile={isMobile} />
      </Suspense>

      <Preload all />  
    </Canvas>
  );



};
export default ConcertoCanvas;