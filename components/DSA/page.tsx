import React from 'react';
import {ArrowUpRight,ArrowRight} from "lucide-react"


function DSA() {
return (
        <div className='h-fit lg:h-screen w-screen bg-light flex flex-col gap-10 items-center justify-between py-10'>
            <div className='flex items-center gap-2 bg-white py-1 px-3 rounded-full'>
                <div className='h-2 w-2 bg-black rounded-full'></div>
                <p>Leetcode</p>
            </div>

            <h1 className='text-dark text-5xl'>Problem Solving</h1>
            <div className='h-8/10 w-full  flex items-center justify-center gap-10  flex-col px-10'>
                <img src="/LC.png" className=' lg:h-8/10 rounded-xl flex items-center justify-around border '/>
                <a href='https://leetcode.com/u/vivek-patel-here/' target="_blank"  className='flex w-fit h-fit items-center gap-2'>
                    <p className='text-secondary text-sm'>Check out</p>
                    <p className='text-sm cursor-pointer hover:underline'>My Leetcode Account</p>
                    <ArrowRight size={16}/>
                </a>

            </div>
        </div>
    )
}

export default DSA