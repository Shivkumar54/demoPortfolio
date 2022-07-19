import React from 'react'
import './project.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Project = () => {


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  let projectList = [
    {
      id: 1,
      projectImg:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      name: "Book my Show Clone",
      description: `I have built Book my show clone using React and Tailwind CSS.
       I used the TMDB movie database for movie details.
       I build this during my internship at Shape AI `
    },
    {
      id: 2,
      projectImg:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      name: "Spottr",
      description: `I have built Spottr website which is an online student PG finder website 
      I have designed using Adobe XD and developed using React JS & Bootstrap.  
      `
    },
    {
      id: 3,
      projectImg:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      name: "Meme Generator",
      description: `I have built a dynamic page application called “Meme Generator” 
      which is a fun app where you can generate a meme by adding text on the image provided by API.`
    },
    {
      id: 4,
      projectImg:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      name: "Task Manager",
      description: ` 
      It is a Task manager Application  in which users can store their day to day tasks in this application. 
      I build this during my internship at Shape AI `
    },
    {
      id: 5,
      projectImg:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      name: "Tenzie Game",
      description: `Tenzi is the fast-paced and frenzied dice-rolling game. 
      Here's how to play: be the first player 
      to roll all ten of your dice to the same number.`
    },
    {
      id: 6,
      projectImg:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      name: "Login Form ",
      description: `Built in HTML and CSS. 
      It is a simple Login page called Backup login Page. 
      It is responsive for all the devices and deployed in vercel `
    },
    {
      id: 7,
      projectImg:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      name: "Movie updater",
      description: `Built using React Js and styled in CSS. 
      It is a simple page where you find Movie Updates . 
      It is responsive for all the devices and deployed in vercel `
    },
    {
      id: 8,
      projectImg:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      name: "Zomato landing Page",
      description: `Built using HTML5 styled in CSS. 
      It is a simple page Zomato landing page . 
      It is responsive for all the devices and deployed in vercel `
    },
  ]


  return (
    <div className="container gap-5 mx-auto px-6 ">
      <h1 className='work' >Projects </h1>

         <Slider {...settings} >
        {projectList.map((eachList) =>
  (
    
    <div className=''>
      <div className='projectt shadow-md rounded-lg grid-cols-1 sm:grid-cols-4 gap-6 mb-5 py-8 px-12 sm:px-0 '>
      <div key={eachList.id} className='w-fit h-auto '>
          <img src ={eachList.projectImg} alt='' className='bg-cover w-screen' />

          </div>
        <div className=' projectt '>
          
                <div className='content'>
                <h1 className='' >{eachList.name}</h1>
                    <p> {eachList.description} </p>
                  </div>

          {/* button  */}
          <div className='flex justify-center items-center gap-1 '>
          <button className='primary-btn text-sm px-9 py-3'>View Project</button>
          </div>
          {/* button  */}

          </div>
    </div>


        </div>
  ))}
     </Slider>      

        
        </div>


  )
}

export default Project
              // <div key='' className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg' >
              //   <img src="" alt="" className='w-20 h-20 mx-auto' />
              //   <p className='mt-4 text-xl font-bold'></p>
              // </div>