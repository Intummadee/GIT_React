


<div align="center">
 <h1>✨ PortFolio <img src="https://giffiles.alphacoders.com/158/158308.gif" width="70px"> ✨</h1>
<a href="https://github.com/Ileriayo/markdown-badges"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" /></a>
<a href="https://github.com/Ileriayo/markdown-badges"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" /></a>
<a href="https://github.com/Ileriayo/markdown-badges"><img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" /></a>
<a href="https://github.com/Ileriayo/markdown-badges"><img src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white" /></a>
<a href="https://github.com/Ileriayo/markdown-badges"><img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" /></a>
<h3>Visit : </h2>
</div>


<img width="100%" height="60%" src="https://github.com/Intummadee/GIT_React/blob/main/assets_me/screen1.png?raw=true">
<img width="100%" height="60%" src="https://github.com/Intummadee/GIT_React/blob/main/assets_me/screen2.png?raw=true">
<img width="100%" height="60%" src="https://github.com/Intummadee/GIT_React/blob/main/assets_me/screen4.png?raw=true">

## Getting Started
To get started, follow these steps:
1. Clone this repository using `git clone https://github.com/Intummadee/GIT_React.git`
2. Install dependencies using `npm install`
3. Run the app using `npm start`

## Tech Stack :
- **Frontend:** HTML,CSS,React Js, Java Script, TailwindCSS
- **Version Control:** Git and GitHub
- **Hosting:** Netlify
- **Code Editor and tools**: VS Code


## 🍹 Library 

<details> 
  <summary><h2> Dependency </h2></summary>

 
  <h3>Initial Project Setup</h3>
  <ul>
   <li>npm create vite@latest ./ -- --template react</li>
  </ul>


  <h3>Tailwind CSS Setup</h3>
  <ul>
   <li>npm install -D tailwindcss</li>
   <li>npx tailwindcss init</li>
   <li>npm install --legacy-peer-deps -D tailwindcss postcss autoprefixer</li>
   <li>npx tailwindcss init -p</li>
  </ul>


  <h3>Three.js and related libraries</h3>
  <ul>
   <li>npm install --legacy-peer-deps @react-three/fiber</li>
   <li>npm install --legacy-peer-deps @react-three/drei</li>
   <li>npm install --legacy-peer-deps maath</li>
   <li>npm install three</li>
  </ul>

  
  <h3>UI and Animation</h3>
  <ul>
   <li>npm install --legacy-peer-deps react-vertical-timeline-component</li>
   <li>npm install --legacy-peer-deps framer-motion</li>
   <li>npm install react-parallax-tilt</li>
  </ul>

  <h3>Routing</h3>
  <ul>
   <li>npm install --legacy-peer-deps react-router-dom</li>
  </ul>

  <h3>Email handling</h3>
  <ul>
   <li>npm install --legacy-peer-deps @emailjs/browser</li>
  </ul>

  <h3>Video playback</h3>
  <ul>
   <li>npm install react-player</li>
  </ul>
  
 
  
</details>



## 🌴 คำสั่งรัน
- อยู่ในโฟลเดอร์ GIT_React แล้วใช้คำสั่ง
```
npm run dev
```

---

### 🥥 Structure or pattern
```JS
import React from 'react'

const Experience = () => {
  return (
    <div>Experience</div>
  )
}
export default Experience
```

---

### 🍉 My Favorite class in TailwindCSS
```h-screen``` - to make an element span the entire height of the viewport.
- https://tailwindcss.com/docs/height#viewport-height


```h-dvh``` - to make an element span the entire height of the viewport

```green-pink-gradient``` - ไว้ทำ gradient

```w-1/2 , w-fit```

```absolute inset-0```

```flex flex-wrap```

```drop-shadow-xl```

```<br className='sm:block hidden' />``` 

```JS
<p className={`${styles.heroSubText} mt-2 text-white-100`}>
I develop 3D visuals, user <br className='sm:block hidden' />
interfaces and web applications
</p>
```

---

## ⛱️ เทคนิค

```&nbsp;``` ย่อมาจาก "non-breaking space" มาจาก Navbar.jsx


- 2 function ด้านล่างได้ผลแบบเดียวกัน เพียงแต่ วิธีล่างถ้าใช้ () จะไม่จำเป็นต้องเขียนคำว่า return
```JS
const ExperienceCard = ({ experience }) => {
  return (
    <div></div>
  )
}
```
```JS
const ExperienceCard = ({ experience }) => 
(
  <div></div>
)
```

- สามารถใช้ JS ด้านล่างแทนการใช้ tag <a> ได้
```JS 
<div
  onClick={() => window.open(source_code_link, "_blank")}
  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
>
  <img
    src={github}
    alt='source code'
    className='w-1/2 h-1/2 object-contain'
  />
</div>
```

```JS
{contact.map((list) => (
  <img 
      src={list.img}
      alt={`icon-${list.id}`}
      {/* className='w-[60%] h-[60%] object-contain' */}
  />
))}
```

- Link
```JS
<Link
  to='/'
  className='flex items-center gap-2'
  onClick={() => {
    setActive("");
    window.scrollTo(0, 0); // เลื่อนหน้าเว็บไปยังตำแหน่งบนสุด
  }}
>
  <p className='text-darksky text-[22px] font-extrabold cursor-pointer flex '>
    Intummadee    
  </p>
</Link>
```





---

## Ref
&emsp; https://techicons.dev/icons/

&emsp; https://www.iconfinder.com/

&emsp; https://www.npmjs.com/package/react-player

&emsp; https://www.fffuel.co/llline/

&emsp; https://tailwindcss.com/

&emsp; https://sketchfab.com/3d-models/stylized-mangrove-greenhouse-4ad533f838f44fa583683ab7939c6aa1 <3d Model>



<br>
<div> 
 <a href="https://www.linkedin.com/in/intummadee-maliyam-800856226/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
 <a href = "mailto:intummadee@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
 <a href="https://github.com/Intummadee?tab=repositories" target="_blank"><img alt="All Repositories" title="All Repositories" src="https://img.shields.io/badge/-All%20Repos-2962FF?style=for-the-badge&logo=koding&logoColor=white"/></a>
 <a href = "https://discordapp.com/users/802492085419769856"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" target="_blank"></a>
</div>
