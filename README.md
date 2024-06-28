




# คำสั่งรัน

```
npm create vite@latest ./ -- --template react
npm install -D tailwindcss
npx tailwindcss init
npm install --legacy-peer-deps @react-three/fiber
npm install --legacy-peer-deps @react-three/drei
npm install --legacy-peer-deps maath
npm install --legacy-peer-deps react-vertical-timeline-component
npm install --legacy-peer-deps @emailjs/browser
npm install --legacy-peer-deps framer-motion
npm install --legacy-peer-deps react-router-dom
npm install --legacy-peer-deps -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install three
npm install react-parallax-tilt


```


# วิธีรัน
```
npm run dev
```

```JS
import React from 'react'

const Experience = () => {
  return (
    <div>Experience</div>
  )
}

export default Experience
```



## css tailwind ที่ชอบ

```h-screen```
- to make an element span the entire height of the viewport.
- https://tailwindcss.com/docs/height#viewport-height


```h-dvh``` to make an element span the entire height of the viewport

```green-pink-gradient```
- ไว้ทำ gradient

```w-1/2 , w-fit```

```absolute inset-0```

```flex flex-wrap```

```drop-shadow-xl```




```<br className='sm:block hidden' />``` 
<p className={`${styles.heroSubText} mt-2 text-white-100`}>
I develop 3D visuals, user <br className='sm:block hidden' />
interfaces and web applications
</p>
- มาจาก Hero.jsx

---

## เทคนิค

```&nbsp;``` ย่อมาจาก "non-breaking space"
- มาจาก Navbar.jsx


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






---

## Ref
https://techicons.dev/icons/