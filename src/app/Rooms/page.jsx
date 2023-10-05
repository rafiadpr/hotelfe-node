import React from 'react';
import RoomTypeCard from '../../components/Card/RoomTypeCard';

const roomTypes = [
  {
    type: 'Standard Room',
    price: 100,
    description: 'A comfortable room with essential amenities.',
    image: '/images/BeSS-Mansion-Hotel-Surabaya-3.jpg', // Replace with your image URL
  },
  {
    type: 'Deluxe Room',
    price: 150,
    description: 'A spacious room with a beautiful view.',
    image: '/images/463156637.jpg', // Replace with your image URL
  },
  {
    type: 'Suite Room',
    price: 250,
    description: 'A luxurious suite with all the extras.',
    image: '/images/hotel-indigo-panama-city-8822704212-2x1.jpeg', // Replace with your image URL
  },
];

function page() {
  return (
    <div className="flex flex-wrap justify-center">
      {roomTypes.map((room, index) => (
        <RoomTypeCard key={index} {...room} />
      ))}
    </div>
  );
}

export default page;
