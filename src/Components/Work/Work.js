import React from 'react'
import {GrLocation}  from "react-icons/gr"

import "./work.css"
const Work = () => {
  return (
      <div>
          <h1 className='work' >Jobs & Internships</h1>
          <div className='work-root container mx-auto px-24'>
          
          <div className='work-children hover:scale-105 duration-500 cursor-pointer' >
          <div className='imager'>
              <img src='https://www.top-employers.com/contentassets/ed7e1b2cb1fd40cab269b2f1839ce5ce/oid00d200000000wi7ids0683y00000jvywbda3y000000iazmsgikkcyh5cad4etln20g6hz3b1gdurj453kqqoqlxgaaspdffalse3?format=jpeg&bgcolor=white&quality=75&height=75' alt='' />
          </div>
              <div className='wrapper'>
                  <h1>Developer</h1>
                  <div className='flexxer'>
                      <h2>Tata Consultancy Services</h2>
                      <h5 className='flex align-center justify-center' > <GrLocation size={20} /> Mumbai</h5>
                  </div>
                  <h4>Currently working</h4>
                  <p clas >I Joined TCS on the 16th of December 2021 
as an “ Associate Software Developer “.
I got trained in Front end Technologies 
and I completed my Training and mini 
Projects given by the team</p>
          </div>
          </div>


          <div className='work-children hover:scale-105 duration-500 cursor-pointer' >
          <div className='imager'>
              <img src='https://pbs.twimg.com/profile_images/1463940373789626369/86v0rfLj_400x400.jpg' alt='' />
          </div>
              <div className='wrapper'>
                  <h1 className='fullstack' >Full-stack Developer</h1>
                  <div className='flexxer'>
                      <h2>Shape AI</h2>
                      <h5 className='flex align-center justify-center' > <GrLocation size={20} /> Bangalore</h5>
                  </div>
                  <h4>2.5 Months Training & Internship</h4>
                  <p clas >I have attended 2 months of internship in Techciti 
Technologies company. I learnt web design from 
basic in this internship HTML5, CSS, Bootstrap, 
JavaScript, ReactJs, NodeJS, Express, MongoDB 
and design responsive and build some 
responsive website and Book My Show Clone </p>
          </div>
          </div>


          <div className='work-children hover:scale-105 duration-500 cursor-pointer' >
          <div className='imager'>
              <img src='https://zenprospect-production.s3.amazonaws.com/uploads/pictures/61c6541a7e99bd000128cb53/picture' alt='' />
          </div>
              <div className='wrapper'>
                  <h1>Software developer </h1>
                  <div className='flexxer'>
                      <h2>Techciti Technologies</h2>
                      <h5 className='flex align-center justify-center' > <GrLocation size={20} />Bangalore</h5>
                  </div>
                  <h4>2.5 Months Internship</h4>
                  <p clas >I have attended 2 months of internship in Techciti Technologies company.
                      I learned HTML5, CSS, and Python and we developed an application known as “Tourism and Analysis”.
                      My role was to make a front-end UI design
</p>
          </div>
          </div>


    </div>
      </div>
  )
}

export default Work