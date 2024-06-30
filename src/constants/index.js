import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    face,
    linkedin,
    instragram,
    githup,
    react,
    java,
    php,
    python,
    vue,
    django,
    vite,
    firebase,
    maraidb,
    opencv,
    aws,
    gcp,
    laravel,
    jQuery,
    RabbitMQ,
    Bootstrap,
    Postman,
    Android_Studio,
    bulma,
    vscode,
    Eclipse,
    spring,
    MySQL,
    Jenkins,
    UXUI,
    database,
    responsive,
    webDev,
  } from "../assets";
  // จริงๆแล้วคือ from "/src/assets/index.js";

  


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Attendance Check system",
      description:
        // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        "The system allows users to upload a list of names via an Excel file. Implemented an automated system utilizing OpenCV for first name and surname recognition from ID cards to verify the identity.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "yellow-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Mobile-Application-Motorcycle",
      description:
        "Implemented features allowing users to view motorcycle service points in KMITL on Google Maps and enabled users to submit complaints, track complaint statuses, and access a complete history of complaints",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Intummadee/Mobile-Application-Motorcycle",
    },
    {
      name: "Beauty-House ",
      description:
        "Developed a web application aimed at solving customer queue reservation issues. Enabled customers to easily schedule appointments by providing quick access to booking history and selecting preferred dates and times.",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "Vue.js",
          color: "green-text-gradient",
        },
        {
          name: "Bulma",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export const myServices = [
    {id:"UX/UI Design" , img : UXUI , detail: "lhttps://www.google.com/search?q=ux+ui+design+icon&sca_esv=2606eb06e94618c9&sca_upv=1&udm=2&biw=1424&bih=684&sxsrf=ADLYWILhhzUgwO583TfNeTCn9xpSo4hTuQ%3A1719758517856&ei=tW6BZrP0M9KO4-EPgZu30AU&oq=ux+u&gs_lp=Egxnd3Mtd2l6LXNlcnAiBHV4IHUqAggAMgQQIxgnMgoQABiABBhDGIoFMggQABiABBixAzIKEAAYgAQYQxiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEi9GVD1B1ixEXAEeACQAQCYAYUBoAHqA6oBAzMuMrgBA8gBAPgBAZgCCaACoATCAgcQABiABBgTwgIIEAAYExgIGB7CAgQQABgDwgIEEAAYHpgDAIgGAZIHAzYuM6AHvBA&sclient=gws-wiz-serp#vhid=fEM817kBEybrsM&vssid=mosaic"},
    {id:"Reponsive Design", img : responsive , detail:""},
    {id:"Web Development" , img : webDev , detail:""},
    {id:"Database Management" , img : database , detail:""},
  ];

  export const contact = [
    {
      id: "facebook",
      img: face,
      link: "https://www.facebook.com/sakura.kazz",
    },
    {
      id: "Linkedin",
      img: linkedin,
      link: "https://www.linkedin.com/in/intummadee-maliyam-800856226/",
    },
    {
      id: "instragram",
      img: instragram,
      link: "https://www.instagram.com/sakurakazz",
    },
    {
      id: "githup",
      img: githup,
      link: "https://github.com/Intummadee"
    },
  ];

  export const aboutMyData = [
    {
      id:'Name',
      data:'Intummadee Maliyam'
    },
    {
      id:'Age',
      data:'22'
    },
    {
      id:'Nationality',
      data:'Thai'
    },
    {
      id:'Experience',
      data:'3 Years'
    },
  ]

  export const aboutMytech = [
    {name: "Programming", allIcon : [{id:"html" , img:html},
      {id:"css" , img:css},
      {id:"java" , img:java},
      {id:"python" , img:python},
      {id:"php" , img:php},
    ]},
    {name: "Framework", allIcon : [{id:"react" , img:react},
      {id:"vue" , img:vue},
      {id:"vite" , img:vite},
      {id:"opencv" , img:opencv},
      {id:"laravel" , img:laravel},
      {id:"nodejs" , img:nodejs},
      {id:"jQuery" , img:jQuery},
      {id:"RabbitMQ" , img:RabbitMQ},
      {id:"Bootstrap" , img:Bootstrap},
      {id:"tailwind" , img:tailwind},
      {id:"bulma" , img:bulma},
      {id:"spring" , img:spring},

    ]},
    {name: "Database", allIcon : [{id:"mongodb" , img:mongodb},
      {id:"firebase" , img:firebase},
      {id:"aws" , img:aws},
      {id:"gcp" , img:gcp},
      {id:"MySQL" , img:MySQL},
    ]},
    {name: "tools", allIcon : [{id:"figma" , img:figma},
      {id:"docker" , img:docker},
      {id:"Postman" , img:Postman},
      {id:"Android_Studio" , img:Android_Studio},
      {id:"git" , img:git},
      {id:"vscode" , img:vscode},
      {id:"Eclipse" , img:Eclipse},
      {id:"Jenkins" , img:Jenkins},
    ]},
  ]
  
  export { services, technologies, experiences, testimonials, projects };