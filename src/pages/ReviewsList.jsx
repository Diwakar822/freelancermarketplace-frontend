import React from 'react';

const ReviewsList = ({ reviews }) => {
    if (!reviews) {
        return (
          <div className="p-6 bg-gray-100 h-screen flex justify-center items-center">
            <p className="text-gray-500">No reviews available</p>
          </div>
        );
      }
    return (
        <div className="p-6 bg-gray-100 h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-xl font-bold mb-4">Reviews</h1>
          {reviews.length > 0 ? (
            <ul className="space-y-4">
              {reviews.map((review, index) => (
                <li key={index} className="border p-4 rounded-lg">
                  <h2 className="font-semibold">{review.freelancerName}</h2>
                  <p>Rating: {review.rating}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No reviews available</p>
          )}
        </div>
      </div>
    );
};

export default ReviewsList;