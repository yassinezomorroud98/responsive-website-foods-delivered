import React from 'react'
import Hamburger from "../assets/humbur3.jpg";
export default function Hero() {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                {/* overlay   */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center '>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Delicious <span className='text-[#FC4F00]'>Food Delivered</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Just for <span className='text-[#FC4F00]'>You</span></h1>
                </div>
                <img className='w-full max-h-[500px] object-over' src={Hamburger} alt='Hamburger' />

            </div>
        </div>
    )
}
