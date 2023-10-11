import React from "react";

const RoomTypeCard = (props) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img
        src={props.foto}
        alt={props.nama_tipe_kamar}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{props.nama_tipe_kamar}</h2>
        <p className="text-gray-500 text-sm">Harga: ${props.harga}/night</p>
        <p className="text-gray-700 mt-2">{props.deskripsi}</p>
      </div>
    </div>
  );
};

export default RoomTypeCard;
