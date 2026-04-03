import React, { useEffect, useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOnline) {
      alert("Booking synced to server!");
      setName("");
      setEmail("");
    } else {
      localStorage.setItem("pendingBooking", JSON.stringify({ name, email }));
      alert("You are offline! Booking saved locally");
      setName("");
      setEmail("");
    }
  };

  useEffect(() => {
    const checkOnline = () => {
      if (isOnline) {
        const local = localStorage.getItem("pendingBooking");
        const result = JSON.parse(local);
        if (result) {
          alert(
            `Connection restored! Syncing pending booking: ${result.name} ${result.email}`,
          );
          localStorage.removeItem("pendingBooking");
        }
      }
    };
    checkOnline();
  }, [isOnline]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div
        className={`px-3 py-1 text-sm font-old rounded-full w-fit mb-4 ${isOnline ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
      >
        {isOnline ? "Online" : "Offline"};
      </div>
      <form
        className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <label>
          name
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="border border-gary-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border border-gary-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-lue-700 transition-colours mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
