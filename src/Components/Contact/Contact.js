import React from 'react'
import "./contact.css"
import ContactDisplayer from "../../Images/contact.png"
const Contact = () => {
  return (
    <div className='flex-row-reverse container mx-auto px-4 md:flex  wrk items-center justify-center '>
      
      <div className='imgr' >
        <img src={ContactDisplayer} />
      </div>
      
      <div className='texter'>
        <h1 className='contact'>Get in Touch </h1>
        <h1 className='contact'> </h1>
        <form action='https://getform.io/f/90b36d0a-96cc-4a5c-aaee-ddba8993fe3c'
          method="POST"
          className='form flex flex-col w-full md:w-3/4 h-full '>
          <input
            type='text'
            name='name'
            placeholder='FullName'
            className='inputerr'
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='inputerr my-4'
          />

          <textarea
            name="message"
            placeholder="Leave your message / feedback here..."
            rows='5'
            className="inputerr"
          >
          </textarea>
        
          <button className='contact-btn hover:scale-105 duration-500 md:px-6 py-3 mt-5' > Submit </button>


        </form>
      </div>
      
    </div>
  )
}

export default Contact