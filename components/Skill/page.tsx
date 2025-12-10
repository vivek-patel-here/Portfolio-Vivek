"use client"
import StoreContext from '@/context/contextStore'
import React,{useContext} from 'react'

function Skill() {
  const context = useContext(StoreContext);
  if(!context) return null;
  return (
    <div className='h-screen w-screen bg-light flex flex-col items-center justify-between py-10' ref={context.skillRef}>
      <div className='flex items-center gap-2 bg-white py-1 px-3 rounded-full'>
        <div className='h-2 w-2 bg-black rounded-full'></div>
        <p>Technical Skills</p>
      </div>

      <h1 className='text-dark text-5xl'>Known Technologies</h1>
      <div className='h-8/10 w-19/20 bg-dark rounded-2xl grid grid-rows-12 grid-cols-12 gap-5 p-5 '>
        <div className='row-span-8 col-span-6 rounded flex items-center justify-between flex-wrap bg-white/5 p-2'>
          <img className="h-10 w-20 lg:h-35 lg:w-35" src="/html.png" alt="" />
          <img className="h-10 w-20 lg:h-35 lg:w-35" src="/css.png" alt="" />
          <img className="h-10 w-20 lg:h-40 lg:w-40" src="/javascript_logo.png" alt="" />
          <img className="h-10 w-20 lg:h-40 lg:w-40" src="/typescript.png" alt="" />
          <img className="h-10 w-20 lg:h-30 lg:w-30" src="/React-icon.png" alt="" />
          <img className="h-10 w-20 lg:h-40 lg:w-60" src="/nextjs.png" alt="" />
          <img className="h-10 w-20 lg:h-25 lg:w-30" src="/tailwindlogo.png" alt="" />
        </div>

        <div className=' row-start-9 row-span-4 col-span-6 flex items-center justify-between bg-white/5 p-2'>
          <img className='h-10 w-20 lg:h-30 lg:w-40 ' src="/rest.png" alt="" />
          <img className='h-10 w-20 lg:h-30 lg:w-60 ' src="/express_logo.png" alt="" />
          <img className='h-10 w-20 lg:h-30 lg:w-50' src="/nest-js.png" alt="" />
        </div>

        <div className='row-span-4 col-span-6 flex items-center justify-between bg-white/5 p-2'>
          <img className='h-10 w-20 lg:h-35 lg:w-35 ' src="/mongodblogo.png" alt="" />
          <img className='h-10 w-20 lg:h-30 lg:w-30 ' src="/sql.png" alt="" />
          <img className='h-10 w-20 lg:h-50 lg:w-60 ' src="/postgres.png" alt="" />
        </div>

        <div className='row-span-4 col-span-3 bg-white/5 p-2 flex items-center justify-center'>
          <img className='h-10 w-20 lg:h-30 lg:w-55' src="/nodejs.png" alt="" />
        </div>

        <div className='row-span-8 col-span-3 flex flex-col items-center justify-center gap-2 bg-white/5 '>
        <img className='h-10 lg:h-20  ' src="/git.png" alt="" />
        <img className='h-10 lg:h-20 ' src="/github2.png" alt="" />
        <img className='h-10 lg:h-20 ' src="/docker.png" alt="" />
        <img className='h-10 lg:h-20 ' src="/zustand.png" alt="" />

        </div>

        <div className='row-span-4 col-span-3 bg-white/5 p-2 flex items-center justify-around'>
        <img className='h-10 w-15 lg:h-30 lg:w-30 ' src="/python_logo.png" alt="" />
        <img className='h-10 w-15 lg:h-30 lg:w-30 ' src="/cpp_logo.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Skill