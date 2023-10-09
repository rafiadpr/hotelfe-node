import React, { useState, useEffect } from "react";
import RoomTypeCard from "../../components/Card/RoomTypeCard";
import { toast } from "react-hot-toast";

function Page() {
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [roomAvailability, setRoomAvailability] = useState("");
  const [availableRooms, setAvailableRooms] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);

  const handleCheckAvailability = async () => {
    try {
      const response = await fetch("http://localhost:8000/kamar/find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tgl_check_in: startDate,
          tgl_check_out: endDate,
          id_tipe_kamar: selectedRoomType,
        }),
      });

      const data = await response.json();

      if (data.length === 0) {
        alert("Room is not available");
        setRoomAvailability("Tidak Tersedia");
        setAvailableRooms([]);
      } else {
        alert("Room is available");
        setRoomAvailability("Tersedia");
        setAvailableRooms(data);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred", {
        style: {
          backgroundColor: "red",
          color: "#fff",
        },
      });
    }
  };

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
    <div className="container mx-auto p-4 mt-32">
      <div className="mb-4">
        <label className="block text-gray-600">Select Room Type:</label>
        <select
          className="border p-2 text-gray-600"
          value={selectedRoomType}
          onChange={(e) => setSelectedRoomType(e.target.value)}
        >
          <option value="">Select Room Type</option>
          {roomTypes.map((roomType) => (
            <option key={roomType.id} value={roomType.id}>
              {roomType.nama_tipe_kamar}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Start Date:</label>
        <input
          className="border p-2"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">End Date:</label>
        <input
          className="border p-2"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleCheckAvailability}
      >
        Check Availability
      </button>
      {roomAvailability && (
        <p className="mt-4">Room Availability: {roomAvailability}</p>
      )}

      {/* {availableRooms.map((room) => (
        <RoomTypeCard
          key={room.id}
          room={room}
          roomAvailability={roomAvailability}
        />
      ))} */}
    </div>
  );
}

export default Page;