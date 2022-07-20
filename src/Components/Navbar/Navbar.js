import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {

    const [nav, setNav]= useState(false)


    const links = [
        {
            id:1,
            pagelink:"Home"
        },
        {
            id:2,
            pagelink:"About"
        },
        {
            id:3,
            pagelink:"Work Experience"
        },
        {
            id:4,
            pagelink:"Skills"
        },
        {
            id:5,
            pagelink:"Projects"
        },
        {
            id:6,
            pagelink:"Contact"
        },
        
    ]


    return ( 
        <div>
            <div className=' flex justify-between items-center w-full h-15 py-3  '>
          <div><h1 className='font-signature text-4xl m-0 items-center cursor-pointer pl-4'>Shivkumar </h1></div>
          <div className='flex pr-12 gap-5'>
                <ul className='hidden md:flex gap-10 font-medium cursor-pointer '>
                
                    {links.map(({ id, pagelink }) => 
        (
   
            <li key={id}><Link to={pagelink} smooth duration={500} >{pagelink}</Link></li>
        )
                    )}
                    
              </ul>

            <div onClick={()=> setNav(!nav)} className='cursor-pointer md:hidden '>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            
            </div>
            
                {nav && (
                <ul className='flex flex-col cursor-pointer items-center justify-center absolute top-20 my-0 left-0 h-screen gap-9 text-4xl overflow-y-hidden bg-black text-white w-full '>
                
                {links.map(({ id, pagelink }) => 
        (
            
            <li onClick={()=> setNav(!nav)} key={id}><Link to={pagelink} smooth duration={500} >{pagelink}</Link></li>
        )
                    )}


            </ul>
            )}
            
    </div>
        </div>
  )
}

export default Navbar