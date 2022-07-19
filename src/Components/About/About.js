import React from 'react'
import AboutPicture from "../../Images/abouut.png"
import "./About.css"
import {FaLinkedin, FaGithub} from "react-icons/fa"

const About = () => {
  return (
      <div className='container mx-auto px-4 about '>
          <div className='aboutImg'>
              <img src={AboutPicture} />
           </div>
          <div className='aboutText'>
              <h1 className=" text-6xl font-semibold mb-5" >About </h1>
              <div className='para'>
                  <p>I'm Shivkumar M 22 years old completed BE in Computer Science stream in the year 2021</p> <br/>
                  <p>I'm a React JS developer with 6 months of experience, and 2+ years of experience in HTML and CSS. Web designer specializing in Adobe XD and Figma Tools.</p>
             </div>

              {/* button  */}
              <div className='md:flex gap-5 mt-5 '>
          <button className='primary-btn about-primary md:px-9 py-3'  > <FaLinkedin /> Linkedin</button>
          <button className='secondary-btn about-primary md:px-9 py-3' > <FaGithub />  Github </button>
          </div>
              {/* button  */}


           </div>
      
      </div>
  )
}

export default About