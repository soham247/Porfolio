import React from 'react'
import { useState } from 'react';

export default function Contact() {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
  
      const response = await fetch(import.meta.env.VITE_WEB3FORMS_URL, {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div className='text-white'>
        <div className='flex items-center gap-10 mt-6'>
            <h2 className='text-5xl sm:text-6xl font-bold ml-5 lg:ml-14' id='heading'><span className='text-7xl sm:text-8xl'>C</span>ontact Me</h2>
            <div className='sm:w-2/5 md:w-2/5 lg:w-3/5 h-[2px] bg-white mt-14' id='line'></div>
        </div>
        <p className=' text-center mt-10'>I am into new opportunities and would love to connect with you.</p>
        <div className='w-4/5 md:w-[50%] mx-auto my-10'>
            <form onSubmit={onSubmit} className='flex flex-col gap-2 '>
    
                <label htmlFor="name">Your Name:</label>
                <input 
                className='mb-4 bg-transparent border border-white p-2 rounded'
                type="text" 
                name="name" 
                required
                placeholder='Name' />

                <label htmlFor="email">Your Email:</label>
                <input 
                className='mb-4 bg-transparent border border-white p-2 rounded'
                type="email" 
                name="email" 
                required
                placeholder='Email'/>

                <label htmlFor="message">Your Message:</label>
                <textarea className='mb-4 bg-transparent border border-white p-2 rounded' name="message" required placeholder='Message'></textarea>

                <button type="submit" className='bg-blue-950 py-2 px-4 rounded'>Submit</button>

            </form>
            <p className='text-center my-2'>{result}</p>
        </div>
      </div>
    );
  }