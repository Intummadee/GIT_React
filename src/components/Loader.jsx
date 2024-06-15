import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress(); // ดึงข้อมูลสถานะการโหลดของทรัพยากร. progress เป็นค่าเปอร์เซ็นต์การโหลดที่มีค่าอยู่ระหว่าง 0 ถึง 100.
  return (
    <Html // ใช้ component Html เพื่อสร้างโครงสร้าง HTML ที่จะถูกแสดงในฉากสามมิติ. ค่า as='div' ระบุว่าองค์ประกอบ HTML ที่จะถูกสร้างขึ้นคือ div.
      as='div'
      center // prop ที่จัดตำแหน่งของ HTML content ให้อยู่ตรงกลางของ canvas
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>  {/* ไอตัวหมุนๆ ระหว่างโหลดอะ */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%  {/* toFixed = ทศนิยม 2 ตำแหน่ง */}
        {/* : แสดงข้อความที่แสดงเปอร์เซ็นต์การโหลดโดยใช้ค่า progress ที่ได้จาก useProgress */}
      </p>
    </Html>
  );
};

export default CanvasLoader;