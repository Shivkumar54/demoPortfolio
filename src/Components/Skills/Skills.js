import React from 'react'

import HTML from "../../Images/html.png"
import CSS from "../../Images/css.png"
import JavaScript from "../../Images/js.png"
import Bootstrap from "../../Images/bootstrap.png"
import ReactJS from "../../Images/react.png"
import Tailwind from "../../Images/tailwind.png"
import Adobe from "../../Images/xd.png"
import Figma from "../../Images/figma.png"
import GitHub from "../../Images/git.png"


const Skills = () => {


  let Technologies = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: Bootstrap,
      title: "Bootstrap",
    },
    {
      id: 5,
      src: ReactJS,
      title: "React JS",
    },
    {
      id: 6,
      src: Tailwind,
      title: "Tailwind",
    },
    {
      id: 7,
      src: GitHub,
      title: 'GitHub',
    },
    {
      id: 8,
      src: Adobe,
      title: "Adobe XD",
    },
    {
      id: 9,
      src: Figma,
      title: "Figma",
    }
    
  ]




  return (
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full  '>
      <div >
          <h1 className='work' >Experiences</h1>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 px-12 sm:px-0'>
          
          {
            Technologies.map((eachTech) => (
              
              <div key={eachTech.id} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg' >
                <img src={eachTech.src} alt="" className='w-20 h-20 mx-auto' />
                <p className='mt-4 text-xl font-bold'>{eachTech.title}</p>
              </div>
            ))
          }
          



        </div>
      </div> 
    </div>
  )
}

export default Skills
