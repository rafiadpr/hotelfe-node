import axios from "axios";
import React, { useState } from "react";
import ReceiptPreviewModal from "../../components/Modal/ReceiptPreviewModal";

function HistoryPage() {
  // State to store the search query and reservation data
  const [searchQuery, setSearchQuery] = useState("");
  const [reservationData, setReservationData] = useState("");
  const [receiptPreviewIsOpen, setReceiptPreviewIsOpen] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  const handleSearchClick = () => {
    axios
      .post("http://localhost:8000/pemesanan/search", {
        keyword: searchQuery,
      })
      .then((res) => {
        setReservationData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrintClick = async (id) => {
    try {
      if (!id) {
        console.error("Reservation ID is undefined or null.");
        return;
      }

      const response = await axios.get(
        `http://localhost:8000/pemesanan/print/${id}`
      );
      setReceiptData(response.data);
      setReceiptPreviewIsOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-32">
      <h1 className="text-2xl font-semibold mb-4">Reservation History</h1>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Enter your reservation ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-1/2"
        />
        <button
          onClick={handleSearchClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {reservationData.length > 0 ? (
        reservationData.map((item) => (
          <div className="mt-4" key={item.id}>
            <h2 className="text-xl font-semibold">Reservation Details</h2>
            <p>Nomor Pemesanan: {item.nomor_pemesanan}</p>
            <p>Nama Pemesan: {item.nama_pemesan}</p>
            <p>Email Pemesan: {item.email_pemesan}</p>
            <p>ID Pemesanan: {item.id}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"
              onClick={() => handlePrintClick(item.id)} // Pass the reservation ID
            >
              Print
            </button>
          </div>
        ))
      ) : (
        <p>No reservations found.</p>
      )}
      <ReceiptPreviewModal
        isOpen={receiptPreviewIsOpen}
        closeModal={() => setReceiptPreviewIsOpen(false)}
        receiptData={receiptData}
      />
    </div>
  );
}

export default HistoryPage;
