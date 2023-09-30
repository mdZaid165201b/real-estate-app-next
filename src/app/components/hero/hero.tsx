import React from 'react';
import Image from 'next/image';
import HeroBG from '../../../../public/images/HeaderBG.jpg';
function Hero() {
    return (
        <header className='w-full h-[200px] md:h-[500px] lg:h-[700px] border border-red-700'>
            <div className='z-50 h-full relative'>
                <Image
                    src={HeroBG}
                    alt='Hero Background'
                    className='w-full h-full object-cover'
                />
                {/* overlay */}
                <div className='w-full h-full bg-black absolute top-0 left-0 opacity-40'></div>
                <div className=' text-white  h-[80px] absolute top-0 translate-y-56 left-[34%]'>
                    <div className='flex justify-center items-center flex-col border border-teal-700'>
                        <h1 className='text-[57px]'>Find Your Dream Home</h1>
                        <h1 className='text-center text-[25px]'>From as low as $10 per day with limited time offer discounts.</h1>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Hero;