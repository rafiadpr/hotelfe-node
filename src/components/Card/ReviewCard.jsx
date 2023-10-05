import React from "react";

const ReviewCard = ({ rating, reviewText, reviewerName }) => {
  return (
    <div className="max-w-md mx-auto mb-6 p-6 bg-white rounded-lg shadow-lg">
      {/* Review Rating */}
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {rating}
        </div>
      </div>

      {/* Full Review Text */}
      <p className="text-gray-700 text-lg">{reviewText}</p>

      {/* Reviewer's Name */}
      <div className="mt-4">
        <p className="text-gray-600 text-sm font-semibold">{reviewerName}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
