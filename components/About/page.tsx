import React, { useContext, useRef } from 'react'
import { ChartLine, Sparkles, Undo2 } from 'lucide-react'
import StoreContext from '@/context/contextStore'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function About() {

    const context = useContext(StoreContext);
    if (!context) return null;

    const ref1 = useRef<HTMLDivElement | null>(null);
    const ref2 = useRef<HTMLDivElement | null>(null);
    const ref3 = useRef<HTMLDivElement | null>(null);
    const ref4 = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: context.aboutRef.current ?? undefined,
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        })

        tl
            .from(ref1.current, {
                x: "-100px",
                opacity: 0
            })
            .from(ref2.current, {
                opacity: 0,
                scale: 0
            })
            .from(ref3.current, {
                opacity: 0,
                x: "100px"
            })
            .from(ref4.current, {
                opacity: 0,
                scale: 0
            })
            .to(ref1.current, {
                x: "-100px",
                opacity: 0,
                scale: 0
            })
            .to(ref2.current, {
                opacity: 0,

            })
            .to(ref3.current, {
                opacity: 0,
                x: "100px"
            })
            .to(ref4.current, {
                opacity: 0,
                scale: 0
            })
    }, { scope: context.aboutRef ?? undefined })

    return (
        <div className='h-fit min-h-screen w-screen bg-light flex items-center justify-around py-5 flex-col lg:flex-row gap-5' ref={context.aboutRef}>
            <div className='h-9/10 w-full pl-10 lg:w-1/4 flex flex-col gap-10' ref={ref1}>
                <h1 className='text-5xl text-dark'>About Me</h1>
                <p className='text-dark w-9/10 lg:w-full text-base leading-8 text-left text-secondary'>I am a B.Tech CSE student at NSUT Main Campus, Delhi, with a strong focus on full-stack development and modern software engineering. I enjoy working across the entire development lifecycle to build reliable, high-quality applications.</p>
                <span className='rotate-160 text-gray-100 mt-10 hidden lg:block'><Undo2 size={300} strokeWidth={2} /></span>
            </div>


            <div className='h-7/10 lg:w-1/4 pl-5  w-9/10 bg-white flex flex-col py-10 px-3 rounded-2xl gap-10' ref={ref2}>
                <ChartLine size={30} strokeWidth={1.25} className=' rounded-full p-2 h-fit w-fit bg-light' />
                <p className='text-dark w-full text-base leading-8 text-left text-secondary'>My technical experience includes React, Next.js, Node.js, NestJS, Express, MongoDB, SQL, and PostgreSQL. I focus on writing clean, maintainable code and building scalable systems that deliver strong performance.</p>
            </div>

            <div className='h-9/10 w-9/10 pl-3 lg:w-1/4 flex flex-col gap-10 '>

                <div className='flex w-full items-start ' ref={ref3}>
                    <span className='w-1/10 h-full py-2 '><Sparkles size={16} strokeWidth={1.5} /></span>
                    <p className=' text-dark w-9/10 text-base leading-8 text-left text-secondary'>I have a solid foundation in Data Structures and Algorithms and approach problem-solving with clarity, structure, and efficiency. I’m also passionate about system design, clean architecture, and creating meaningful digital experiences.</p>
                </div>
                <div className='flex w-full items-start ' ref={ref4}>
                    <span className='w-1/10 h-full py-2 '><Sparkles size={16} strokeWidth={1.5} /></span>
                    <p className='  text-dark w-9/10 text-base leading-8 text-left text-secondary'>Along with technical depth, I bring strong soft skills such as communication, adaptability, teamwork, and continuous learning. My goal is to contribute to impactful, industry-grade products while continuously growing as a developer.</p>
                </div>
            </div>
        </div>
    )
}

export default About