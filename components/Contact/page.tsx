"use client"
import React from 'react'

function Contact() {
  return (
    <div className='w-screen h-100 flex justify-center items-center bg-light bg-[url(/lamborghini.jpeg)] bg-cover bg-center '>
        <div className='w-full h-full bg-overlay flex flex-col items-center justify-center gap-4'>
            <h1 className='text-light text-4xl text-center lg:text-6xl font-semibold'>Got a Vision? Let's Bring it to Life!</h1>
            <p className='text-light w-8/10 lg:w-1/2 text-center'>I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea.</p>
            <p className='text-2xl text-center text-secondary'>Feel free to reach out through the contact details below.</p>
        </div>
    </div>
  )
}

export default Contact