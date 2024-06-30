
import { BrowserRouter } from "react-router-dom"
import {About , Contact, Experience , Feedbacks, Hero , Navbar, Tech , Project, StarsCanvas, Footer, Service } from "./components"



const App = ()=>{

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />


        </div>
        <About />
        <Service />
        <Tech />
        {/* <Experience /> */}
        <Project />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />

        </div>
      </div>

      <Footer />
    </BrowserRouter>
  )
}

export default App
