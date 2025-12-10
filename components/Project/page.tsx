"use client"
import React,{useContext} from 'react'
import {ArrowUpRight,ArrowRight} from "lucide-react"
import StoreContext from '@/context/contextStore'
import Link from 'next/link';

function Project() {
    const context = useContext(StoreContext);
    if(!context) return null;

    const projects = [
        {
            title: "AI-Think Idea Aggregator Website",
            imgSrc: "/aithink.png",
            Link: "https://ai-think-idea-aggregator.vercel.app/",
            githublink:"https://github.com/vivek-patel-here/AiThink-idea-aggregator",
        }, {
            title: "Lectora-AI Website",
            imgSrc: "/lectora.png",
            Link: "https://lectora-ai.onrender.com/",
            githublink:"https://github.com/vivek-patel-here/Lectora-AI",
        }, {
            title: "QuickCuisine",
            imgSrc: "/project.png",
            Link: "https://quickcuisineclient.onrender.com/home",
            githublink:"https://github.com/vivek-patel-here/QuickCuisine",
        }
    ]


    return (
        <div className='h-fit lg:h-screen w-screen bg-light flex flex-col items-center justify-between gap-10 py-10' ref={context.projectRef}>
            <div className='flex items-center gap-2 bg-white py-1 px-3 rounded-full'>
                <div className='h-2 w-2 bg-black rounded-full'></div>
                <p>Portfolio</p>
            </div>

            <h1 className='text-dark text-5xl'>Latest Works</h1>
            <div className='h-fit lg:h-8/10 w-full  flex items-center justify-center flex-col'>
                <div className='h-fit lg:h-8/10 w-9/10 flex flex-col lg:flex-row items-center justify-around'>
                    {
                        projects.map((p,k) => {
                            return (
                                <div className=' h-9/10 w-full lg:w-1/3 flex flex-col p-4 gap-3' key={k}>
                                    <div className=' h-7/10 w-full bottom-layer rounded-2xl overflow-hidden'>
                                        < a href={p.Link} target='_blank' className='layer h-full w-full bg-black/30'>
                                       <span className="absolute top-1/2 left-1/2 -translate-1/2  rounded-full bg-dark text-light"> <ArrowUpRight size={35} strokeWidth={1}  /></span>
                                        </a>
                                        <img src={p.imgSrc} alt="" className='h-full w-full'/>
                                    </div>
                                    <div className='px-1 flex items-center justify-between'>
                                    <p className='text-sm'>{p.title}</p>
                                    <a href={p.githublink} target='_blank' className='text-xs hover:underline'>Source Code</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Link href="/my-projects" className='flex w-fit h-fit items-center gap-5'>
                    <p className='text-secondary text-md'>Check out More</p>
                   <ArrowRight />
                    <p className='text-md cursor-pointer hover:underline'>View More</p>
                </Link>

            </div>
        </div>
    )
}

export default Project