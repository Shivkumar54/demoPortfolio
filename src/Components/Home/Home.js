import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import "./Home.css"
import Resume from "../Resume/Resume.pdf"

const Home = () => {

    // Type Writer 
    const {text} = useTypewriter({
        words: ['Frontend Developer', 'Web Designer'],
        loop: 0, // Infinit
      })
    // Type Writer 


  return (
      <div className='flex flex-col justify-center items-center h-screen my-0 p-0'>
          <h4 className='default-text sm: text-3xl md:text-3xl' >Hello I'm</h4>
          <h1 className='default-text sm: text-5xl md:text-7xl font-semibold' >Shivkumar M</h1>
          <h3 className='default-text sm: text-2xl md:text-4xl font-medium'>{text}<Cursor /> </h3>
          
           
          <div className='md:flex gap-1 mt-5 '>
          <button className='primary-btn sm:py-2 px-4 mx-2   md:px-9 py-3'  ><a href={Resume} download="Resume" >Download CV</a></button>
          <button className='secondary-btn sm:py-2 px-4 mx-2    md:px-9 py-3' >Contact Me </button>
          </div>

          <div>
              
          </div>
    </div>
  )
}

export default Home