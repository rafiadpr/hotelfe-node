import React, { useState, useEffect } from "react";
import RoomTypeCard from "../../components/Card/RoomTypeCard";

const RoomType = () => {
  const [roomTypes, setRoomTypes] = useState([]);
  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const response = await fetch("http://localhost:8000/tipekamar");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRoomTypes(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchRoomTypes();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {roomTypes.map((room) => (
        <RoomTypeCard
          key={room.id}
          foto={`http://localhost:8000/tipekamar/uploads/${room.foto}`} // Updated the image source URL
          nama_tipe_kamar={room.nama_tipe_kamar}
          harga={room.harga}
          deskripsi={room.deskripsi}
        />
      ))}
    </div>
  );
};

export default RoomType;