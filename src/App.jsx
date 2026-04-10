import React, { useState } from "react";
import Persist from "./components/Persist";
import ProfileCard from "./components/ProfileCard";
import SkeletonCard from "./components/SkeletonCard";
import BookingForm from "./components/BookingForm";
import ProgressiveImage from "./components/ProgressiveImage";
import MovieCard from "./components/MovieCard";
import Modal from "./components/Modal";
import SmartPag from "./components/smartPag";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center">
      <SmartPag />
    </div>
  );
}
