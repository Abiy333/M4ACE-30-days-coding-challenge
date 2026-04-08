import React, { useState } from "react";
import Persist from "./components/Persist";
import ProfileCard from "./components/ProfileCard";
import SkeletonCard from "./components/SkeletonCard";
import BookingForm from "./components/BookingForm";
import ProgressiveImage from "./components/ProgressiveImage";
import MovieCard from "./components/MovieCard";
import Modal from "./components/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Day 8: The Focus Trap</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-bold outline-none focus:ring-4 focus:ring-blue-500/50"
      >
        Open Security Settings
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Authentication Required"
      >
        <p className="mb-4">
          Your mouse is useless here. Try pressing Tab, Shift+Tab, and Escape.
          Notice how your focus perfectly loops inside this box.
        </p>
        <input
          type="password"
          placeholder="Enter Admin Password"
          className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </Modal>
    </div>
  );
}
