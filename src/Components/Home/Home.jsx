import React from 'react';
import Image from '../../Images/laptopBG.jpg'

const Home = () => {
    return (
        <>
        <div className='flex md:h-[60vh] lg:h-[80vh] justify-between gap-5 md:gap-10 container mx-auto my-16'>
            <div className="banner-text w-1/2 flex flex-col justify-center">
                <h1 className='text-3xl md:text-5xl font-bold'>Buy Your Favourite Laptop from the <span className='text-sky-500'>Biggest Market</span></h1>
                <p className='text-xl mt-7 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio quas ab quidem, minima ut harum deserunt. Numquam, consequatur repellendus.</p>
            </div>
            <div className="banner-img flex items-center justify-center w-1/2">
                <img src={Image} alt="" />
            </div>
            </div>
            <div>
                <h1 className='text-center text-5xl'>Customer <span className='text-sky-500'>Reviews</span></h1>
                <div>

                </div>
            </div>
            </>
    );
};

export default Home;