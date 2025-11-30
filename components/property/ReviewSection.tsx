import React from "react";
import { Review } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="space-y-4 mt-6">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="border p-4 rounded-xl shadow-sm flex gap-4"
        >
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <p className="font-semibold">{review.name}</p>
            <p className="text-yellow-500">⭐ {review.rating}/5</p>
            <p className="text-gray-700 mt-1">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
