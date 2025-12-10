"use client"
import React from 'react'
import { Boxes, Box , Mail , Phone ,Linkedin } from 'lucide-react'
import StoreContext from '@/context/contextStore'
import { closeSnackbar, enqueueSnackbar } from 'notistack'



function Footer() {
  const context = React.useContext(StoreContext);
  if (!context) return null;
  const copy = (subject, val) => {
    navigator.clipboard.writeText(val);
    const key = enqueueSnackbar(`${subject} copied to clipboard.`,{variant:'default'});
    setTimeout(() => {
      closeSnackbar(key)
    }, 2000);
  }

  return (
    <div className='w-screen h-40 bg-dark text-light flex justify-between items-center mt-10' ref={context.contactRef}>
      <span className='text-secondary'><Box strokeWidth={0.5} size={100} /></span>
      <ul className='hidden lg:flex items-center justify-start w-4/10 h-fit gap-5  '>
        <li className='cursor-pointer hover:bg-white/10 px-2 py-1 rounded-2xl text-secondary' onClick={() => context.scrollHandler(context.homeRef)}>Home</li>
        <li className='cursor-pointer hover:bg-white/10 px-2 py-1 rounded-2xl text-secondary' onClick={() => context.scrollHandler(context.aboutRef)}>About Me </li>
        <li className='cursor-pointer hover:bg-white/10 px-2 py-1 rounded-2xl text-secondary' onClick={() => context.scrollHandler(context.projectRef)}>Projects</li>
        <li className='cursor-pointer hover:bg-white/10 px-2 py-1 rounded-2xl text-secondary' onClick={() => context.scrollHandler(context.skillRef)}>Skills</li>
      </ul>
      <div className=' w-3/10 h-fit flex items-center justify-end gap-5'>
        <p className='text-xl text-secondary cursor-pointer' onClick={() => copy("Email", "vivek.patel.1057@gmail.com")}><Mail /></p>
        <p className='text-xl text-secondary cursor-pointer' onClick={() => copy("Phone number", "8595818416")}><Phone /></p>
        <a href='https://www.linkedin.com/in/vivek-patel2004/' target='_blank' className='text-xl text-secondary cursor-pointer'><Linkedin /></a>
      </div>
      <span className='text-secondary'><Boxes strokeWidth={0.5} size={100} /></span>
    </div>
  )
}

export default Footer