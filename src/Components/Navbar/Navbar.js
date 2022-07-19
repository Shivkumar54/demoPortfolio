import React,{useState} from 'react'
import Lists from '../../Lists'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

    const [nav, setNav]= useState(false)
    
   const menuBar = Lists.map((list) => {
        return (
            
            <li key={list.id}>{list.title}</li>
        )
    })
   

    
    return (
        <div className=' flex justify-between items-center h-15 py-3 '>
          <div><h1 className='font-signature text-4xl cursor-pointer pl-9'>Shivkumar </h1></div>
          <div className='flex pr-12 gap-5'>
                <ul className='hidden md:flex gap-10 font-medium cursor-pointer '>
                    {menuBar}
              </ul>

            <div onClick={()=> setNav(!nav)} className='cursor-pointer md:hidden '>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            
            </div>
            {nav && (
                <ul className='flex flex-col cursor-pointer items-center justify-center absolute top-20 my-0 left-0 h-screen gap-9 text-4xl overflow-y-hidden bg-black text-white w-full '>
                {menuBar}
            </ul>
            )}
            
    </div>
  )
}

export default Navbar