import React from "react";
import "../../App.css";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed h-screen"
      style={{ backgroundImage: 'url("/images/BeSS-Mansion-Hotel-Surabaya-3.jpg")' }}
    >
      <div className="container mx-auto h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
          Welcome to Our Luxury Hotel
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white text-center">
          Enjoy a memorable stay with breathtaking views.
        </p>
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full font-semibold text-lg md:text-xl lg:text-2xl">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
