// components/property/BookingSection.tsx
import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = calculateNights();
  const total = nights * price;

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl sticky top-20">
      <h3 className="text-2xl font-semibold">${price} / night</h3>

      {/* Date Inputs */}
      <div className="mt-4">
        <label>Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label>Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      {/* Total */}
      <div className="mt-4 text-lg">
        <p>
          Total payment: <strong>${total || 0}</strong>
        </p>
      </div>

      {/* Button */}
      <button className="mt-5 bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
