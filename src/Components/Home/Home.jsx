import React from 'react';
import Image from '../../Images/laptopBG.jpg'

const Home = () => {
    return (
        <>
        <div className='flex justify-between gap-5 md:gap-10 container mx-auto my-16'>
            <div className="banner-text w-1/2 flex flex-col justify-center">
                <h1 className='text-5xl font-bold'>Buy Your Favourite Laptop from the Biggest Market</h1>
                <p className='text-2xl mt-7 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio quas ab quidem, minima ut harum deserunt. Numquam, consequatur repellendus.</p>
            </div>
            <div className="banner-img flex items-center justify-center w-1/2">
                <img src={Image} alt="" />
            </div>
            </div>
            <div>
                <h1 className='text-center text-5xl'>Customer Reviews</h1>
            </div>
            </>
    );
};

export default Home;