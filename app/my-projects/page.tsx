"use client"
import React from 'react'
import  { useRouter } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'

function ProjectFrame() {
    const router = useRouter();
    const Projects = [
        {
            title: "AI-Think Idea Aggregator Website",
            imgSrc: "/aithink.png",
            Link: "https://ai-think-idea-aggregator.vercel.app/",
            githublink: "https://github.com/vivek-patel-here/AiThink-idea-aggregator",
        }, {
            title: "Lectora-AI Website",
            imgSrc: "/lectora.png",
            Link: "https://lectora-ai.onrender.com/",
            githublink: "https://github.com/vivek-patel-here/Lectora-AI",
        }, {
            title: "QuickCuisine Website",
            imgSrc: "/project.png",
            Link: "https://quickcuisineclient.onrender.com/home",
            githublink: "https://github.com/vivek-patel-here/QuickCuisine",
        }, {
            title: "SmartBook Website",
            imgSrc: "/project2.png",
            Link:"https://smart-appointment-booking-system-client-ke7j.onrender.com",
            githublink:  "https://github.com/vivek-patel-here/smart-appointment-booking-sysytem",
        }, {
            title: "Memestream Website",
            imgSrc: "/project3.png",
            Link: "https://memefy-zx5p.onrender.com",
            githublink: "https://github.com/vivek-patel-here/Memefy",
        },{
            title :"Collab Canvas",
            imgSrc:"/project4.png",
            Link:"https://collab-canvas-lyart.vercel.app/",
            githublink: "https://github.com/vivek-patel-here/Collab-Canvas"
        }
    ]

    const backBtn = ()=>{
        return router.push('/');

    }
    return (
        <>
        <div className='bg-dark w-screen h-20 flex items-center justify-between px-10 '>
            <button className='text-light h-10 w-50 cursor-pointer' onClick={backBtn}>&larr; Back</button>
              <div className='flex justify-between  h-10 items-center gap-2 bg-white py-1 px-3 rounded-full'>
                <div className='h-2 w-2 bg-black rounded-full'></div>
                <p>Projects</p>
            </div>
        </div>
        <div className='bg-dark w-screen h-screen masonary  py-10 px-10'>

            {Projects.map((p,id) => <div className='h-fit w-fit m-2 bottom-layer' key={id}>
                < a href={p.Link} target='_blank' className='h-full w-full layer bg-black/30 '>
                    <span className="absolute top-1/2 left-1/2 -translate-1/2  rounded-full  text-light"> <ArrowUpRight size={35} strokeWidth={1} /></span>
                </a>
                <img src={p.imgSrc} alt="" className='rounded-xl my-5' />
            </div>)}
        </div>
        </>

    )
}

export default ProjectFrame