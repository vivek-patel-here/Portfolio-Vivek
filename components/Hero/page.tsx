"use client"
import React, { useContext, useRef } from 'react'
import { Minus, ArrowDown } from 'lucide-react'
import StoreContext from '@/context/contextStore'
import CountUp from 'react-countup';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";



function Hero() {
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
                trigger: context.homeRef.current ?? undefined,
                start: "top top",
                end: "bottom center",
                scrub: 1,
                // markers:true
            }
        });

        gsap.from(ref1.current,{
            y:-10,
            opacity:0,
            duration:0.4
        })

        gsap.from(ref2.current,{
            opacity:0,
            x:50
        })

        gsap.from(ref4.current,{
            y:"-10%",
            repeat:-1,            
            yoyo:true
        })

        gsap.from(ref3.current,{
            opacity:0,
            x:"-100px"
        })

        tl
        .to(ref2.current, {
            opacity: 0
        }).to(ref3.current,{
            opacity:0,
            x:"-100px"
        })

    }, { scope: context.homeRef.current ?? undefined })

    return (
        <div className='h-180 md:h-screen w-screen px-10 flex items-center' ref={context.homeRef} >

            <div className="flex w-12  flex-col justify-between py-10 items-center h-8/10" ref={ref1}>
                <p className="  text-xs uppercase text-secondary  rotate-270  w-50 text-start  ">
                    Software Developer
                </p>
                <span className="text-xs text-start text-secondary rotate-270 ">
                    2024
                </span>
            </div>

            <div className='flex-1 h-full flex justify-between items-center'>
                <div className='flex-1 h-full  flex flex-col items-center justify-around'>
                    <div className='w-full md:pl-15 flex items-center  justify-left h-fit gap-3'>
                        <div className='flex w-1/3 flex-col gap-2  '>
                            <h1 className='text-3xl md:text-5xl  text-dark'>+<CountUp end={800} /></h1>
                            <p className='text-secondary text-xs '>LeetCode Problems Solved</p>
                        </div>

                        <div className='flex w-1/3 flex-col gap-2  '>
                            <h1 className='text-3xl md:text-5xl  text-dark'>+<CountUp end={5} /></h1>
                            <p className='text-secondary text-xs '>Hackathons participated</p>
                        </div>
                    </div>
                    <div className=' h-4/10 w-full md:pl-5 flex flex-col items-center justify-center' ref={ref3}>
                        <h1 className=' text-7xl md:text-[25vh]/[23vh]  tracking-widest'>Hello</h1>
                        <p className=' flex text-md w-8/10 justify-start h-fit items-center'><Minus size={50} strokeWidth={1} /> It's Vivek Patel a Software Developer</p>
                    </div>

                    <div className=' flex w-full px-10  h-1/10 items-center gap-1 ' ref={ref4}>
                        <p className='text-sm'>Scroll Down</p>
                        <ArrowDown size={15} />
                    </div>

                </div>
                {/* <img src="/vivek2.png" alt="" className='w-1/2 ' /> */}
                <div className="bg-[url(/vivek2.png)] h-9/10 w-1/2 bg-no-repeat bg-cover bg-position-[center_top_3rem] hidden lg:block" ref={ref2}></div>
            </div>
        </div>
    )
}

export default Hero