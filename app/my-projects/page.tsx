"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { ArrowUpRight } from "lucide-react"

function ProjectFrame() {
  const router = useRouter()

  const Projects = [
    {
      title: "AI-Think Idea Aggregator Website",
      imgSrc: "/aithink.png",
      Link: "https://ai-think-idea-aggregator.vercel.app/",
    },
    {
      title: "Lectora-AI Website",
      imgSrc: "/lectora.png",
      Link: "https://lectora-ai.onrender.com/",
    },
    {
      title: "QuickCuisine Website",
      imgSrc: "/project.png",
      Link: "https://quickcuisineclient.onrender.com/home",
    },
    {
      title: "SmartBook Website",
      imgSrc: "/project2.png",
      Link: "https://smart-appointment-booking-system-client-ke7j.onrender.com",
    },
    {
      title: "Collab Canvas",
      imgSrc: "/project4.png",
      Link: "https://collab-canvas-lyart.vercel.app/",
    },
  ]

  return (
    <>
      {/* Header */}
      <div className="bg-dark w-full h-20 flex items-center justify-between px-10">
        <button
          className="text-light cursor-pointer"
          onClick={() => router.push("/")}
        >
          ← Back
        </button>

        <div className="flex items-center gap-2 bg-white py-1 px-3 rounded-full">
          <div className="h-2 w-2 bg-black rounded-full"></div>
          <p>Projects</p>
        </div>
      </div>

    <div className="bg-dark w-full min-h-screen px-10 py-10">
  <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

    {Projects.map((p, id) => (
      <div key={id} className="break-inside-avoid relative group">

        <img
          src={p.imgSrc}
          alt={p.title}
          className="w-full rounded-xl object-cover"
        />

        {/* Hover overlay */}
        <a
          href={p.Link}
          target="_blank"
          className="absolute inset-0 bg-black/60 opacity-0 
                     group-hover:opacity-100 transition 
                     flex items-center justify-center rounded-xl"
        >
          <ArrowUpRight size={40} className="text-white" />
        </a>

      </div>
    ))}

  </div>
</div>
    </>
  )
}

export default ProjectFrame