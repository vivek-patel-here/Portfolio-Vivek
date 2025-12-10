"use client"

import React from 'react'
import Hero from '@/components/Hero/page'
import Navbar from '@/components/Navbar/page'
import About from "@/components/About/page"
import Project from '@/components/Project/page'
import DSA from '@/components/DSA/page'
import Skill from '@/components/Skill/page'
import Contact from '@/components/Contact/page'
import Footer from "@/components/Footer/page"
import { SnackbarProvider } from 'notistack'


function Home() {
  return (
    <div className='w-screen min-h-screen h-fit'>
      <SnackbarProvider/>
      <Navbar/>
      <Hero />
      <About />
      <Project/>
      <DSA/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home