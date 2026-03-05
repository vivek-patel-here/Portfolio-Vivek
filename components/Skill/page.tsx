"use client"
import StoreContext from "@/context/contextStore"
import React, { useContext } from "react"

function Skill() {
  const context = useContext(StoreContext)
  if (!context) return null

  return (
    <div
      className="min-h-screen w-full bg-light flex flex-col items-center py-16 px-6 gap-6"
      ref={context.skillRef}
    >
      <div className="flex items-center gap-2 bg-white py-1 px-4 rounded-full">
        <div className="h-2 w-2 bg-black rounded-full"></div>
        <p>Technical Skills</p>
      </div>

      <h1 className="text-dark text-4xl md:text-5xl text-center font-semibold">
        Known Technologies
      </h1>

      {/* Main Grid */}
      <div className="w-full max-w-7xl mx-auto bg-dark rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

        {/* Frontend */}
        <div className="bg-white/5 rounded-lg p-6 grid grid-cols-3 gap-6 place-items-center min-h-[180px] hover:scale-105 transition">
          <img className="h-12 md:h-16 lg:h-20" src="/html.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/css.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/javascript_logo.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/React-icon.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/nextjs.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/tailwindlogo.png" />
        </div>

        {/* Backend */}
        <div className="bg-white/5 rounded-lg p-6 grid grid-cols-3 gap-6 place-items-center min-h-[180px] hover:scale-105 transition">
          <img className="h-12 md:h-16 lg:h-20" src="/rest.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/express_logo.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/nest-js.png" />
        </div>

        {/* Database */}
        <div className="bg-white/5 rounded-lg p-6 grid grid-cols-3 gap-6 place-items-center min-h-[180px] hover:scale-105 transition">
          <img className="h-12 md:h-16 lg:h-20" src="/mongodblogo.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/sql.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/postgres.png" />
        </div>

        {/* Node */}
        <div className="bg-white/5 rounded-lg p-6 flex items-center justify-around min-h-[180px] hover:scale-105 transition">
          <img className="h-16 md:h-20 lg:h-24" src="/nodejs.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/typescript.png" />

        </div>

        {/* Tools */}
        <div className="bg-white/5 rounded-lg p-6 grid grid-cols-2 gap-6 place-items-center min-h-[180px] hover:scale-105 transition">
          <img className="h-12 md:h-16 lg:h-20" src="/git.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/github2.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/docker.png" />
          <img className="h-12 md:h-16 lg:h-20" src="/zustand.png" />
        </div>

        {/* Languages */}
        <div className="bg-white/5 rounded-lg p-6 flex items-center justify-around min-h-[180px] hover:scale-105 transition">
          <img className="h-14 md:h-18 lg:h-20" src="/python_logo.png" />
          <img className="h-14 md:h-18 lg:h-20" src="/cpp_logo.png" />
        </div>

      </div>
    </div>
  )
}

export default Skill