"use client";

import React, { useContext, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import StoreContext from "@/context/contextStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const context = useContext(StoreContext);
  if (!context) return null; 

  const navCont = useRef<HTMLDivElement|null>(null);
  const ref1 = useRef<HTMLHeadingElement|null>(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  useGSAP(()=>{

    const tl = gsap.timeline();

    tl.from(ref1.current,{
      y:-10,
      opacity:0,
      duration:0.2
    })
    .from(ref2.current,{
      y:-10,
      opacity:0,
      duration:0.2
    })
    .from(ref3.current,{
      y:-10,
      opacity:0,
      duration:0.2
    })
    .from(ref4.current,{
      y:-10,
      opacity:0,
      duration:0.2
    })
    .from(ref5.current,{
      y:-10,
      opacity:0,
      duration:0.2
    })
    .from(ref6.current,{
      y:-10,
      opacity:0,
      duration:0.2
    })

  },{scope:navCont.current??undefined})

  return (
    <div className="h-15 w-screen flex items-end justify-between px-5 md:px-10 py-2" ref={navCont}> 
      <h1 className="font-bold text-2xl md:text-3xl text-dark" ref={ref1}>Vivek.</h1>

      <ul className="w-8/10 h-full items-end gap-10 px-5 hidden md:flex">
        <li
          className="cursor-pointer hover:underline"
          onClick={() => context.scrollHandler(context.aboutRef)}
          ref={ref2}
        >
          About Me
        </li>

        <li
          className="cursor-pointer hover:underline"
          onClick={() => context.scrollHandler(context.projectRef)}
          ref={ref3}
        >
          Portfolio
        </li>

        <li
          className="cursor-pointer hover:underline"
          onClick={() => context.scrollHandler(context.skillRef)}
          ref={ref4}
        >
          Skills
        </li>

        <li
          className="cursor-pointer hover:underline"
          onClick={() => context.scrollHandler(context.contactRef)}
          ref={ref5}
        >
          Contact
        </li>
      </ul>

      <a href="https://github.com/vivek-patel-here" target="_blank" className="flex cursor-pointer items-center hover:underline text-sm" ref={ref6}>
        Github{" "}
        <span className="text-sm rounded-full hover:bg-[#F8F8F8] p-1">
          <ArrowUpRight />
        </span>
      </a>
    </div>
  );
}

export default Navbar;
