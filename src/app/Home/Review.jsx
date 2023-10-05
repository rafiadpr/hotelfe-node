import React from "react";

const testimonials = [
  {
    point: "Amazing view",
    review:
      "Took advantage of the downtown location to walk to dinner check out a couple galleries and have drinks. It was great. Service top notch as always. Bed comfort can not be beat.",
    reviewer: "John Doe",
  },
  {
    point: "Professional",
    review:
      "This is the perfect hotel for a weekend getaway in. The downtown area on Main Street is a best kept secret and the offers everything you need if you don’t feel like venturing out so much on a rough day.",
    reviewer: "Jane Smith",
  },
  {
    point: "Expert in Everyway",
    review:
      "They were extremely accommodating and allowed us to check in early at like 10am. We got to hotel super early and I didn’t wanna wait.",
    reviewer: "Bob Johnson",
  },
];

const TestimonialCard = ({ point, review, reviewer }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{point}</div>
        <p className="text-gray-700 text-base">{review}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">- {reviewer}</p>
      </div>
    </div>
  );
};

const Review = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Guest Tetimonial
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
