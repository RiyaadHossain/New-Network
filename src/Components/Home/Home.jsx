import React from "react";
import useReview from "../Hook/Hook";
import Image from "../../Images/laptopBG.jpg";
import HomeReview from "../HomeReview/HomeReview";

const Home = () => {
  const [reviews] = useReview();
  return (
    <>
      <div className="flex md:h-[60vh] lg:h-[80vh] justify-between gap-5 md:gap-10 container mx-auto my-16">
        <div className="banner-text w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Buy Your Favourite Laptop from the
            <span className="text-sky-500">Biggest Market</span>
          </h1>
          <p className="text-xl mt-7 font-thin">
            Here you'll find the most advanced laptops from the biggest online
            shop. We have almost all collection of smart and advanced laptops as
            you want. Also, we offer 2 years of warranty of every laptops you
            buy from our site.
          </p>
        </div>
        <div className="banner-img flex items-center justify-center w-1/2">
          <img className="rounded-lg" src={Image} alt="" />
        </div>
      </div>
      <div>
        {reviews.slice(0, 3).map((review, index) => (
          <HomeReview key={index} reviews={review} />
        ))}
      </div>
    </>
  );
};

export default Home;
