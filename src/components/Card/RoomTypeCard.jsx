import React from 'react';

const RoomTypeCard = ({ type, price, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 mt-32">
      <img src={image} alt={`${type} Room`} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{type}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-900 text-lg mt-2">${price} per night</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
          onClick={() => alert(`Reserved a ${type} room!`)}
          href="/reservations"
        >
          Reserve
        </button>
      </div>
    </div>
  );
};

export default RoomTypeCard;
