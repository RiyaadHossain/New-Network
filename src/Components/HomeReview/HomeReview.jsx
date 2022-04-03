import React from 'react';

const HomeReview = ({ reviews }) => {
    const {name, img, review, rating} =  reviews
    return (
        <div className='mb-8  text-center'>
            <div className="review-img">
                <img className='w-24 h-24 object-cover rounded-full mx-auto' src={img} alt="" />
            </div>
            <div className="review-text">
                <h3 className='text-2xl font-bold
                mt-2'> {name}</h3>
                <p className='text-lg'>{review}</p>
                <span className='text-lg'>{rating}⭐</span>
            </div>
        </div>
    );
};

export default HomeReview;