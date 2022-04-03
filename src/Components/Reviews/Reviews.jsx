
import useReview from "../Hook/Hook";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = () => {

    const [reviews] =useReview()
  return (
    <div className="container mx-auto mt-16">
      <h1 className="text-center text-5xl">
        Customer <span className="text-sky-500">Reviews</span>
      </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-7">
              {reviews.map((review, index) => <ReviewCard key={index} reviewItem={review}/>)}
      </div>
    </div>
  );
};

export default Reviews;
