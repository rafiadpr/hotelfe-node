import React from 'react';

const RoomTypeCard = ({ room, roomAvailability }) => {
  const { nama_tipe_kamar, harga, deskripsi, foto } = room;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 mt-32">
      <img src={foto} alt={`${nama_tipe_kamar} Room`} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nama_tipe_kamar}</div>
        <p className="text-gray-700 text-base">{deskripsi}</p>
        <p className="text-gray-900 text-lg mt-2">${harga} per night</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full ${
            roomAvailability === "Tersedia" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {roomAvailability}
        </button>
      </div>
    </div>
  );
};

export default RoomTypeCard;