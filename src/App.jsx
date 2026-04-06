import React from "react";
import Persist from "./components/Persist";
import ProfileCard from "./components/ProfileCard";
import SkeletonCard from "./components/SkeletonCard";
import BookingForm from "./components/BookingForm";
import ProgressiveImage from "./components/ProgressiveImage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 p-8 flex flex-col items-center gap-10">
      <h1 className="text-white text-3xl font-bold">Image Engine Test</h1>

      <div className="w-full max-w-2xl">
        <h2 className="text-gray-400 mb-2">Test 1: Valid Image (Blur-up)</h2>
        <ProgressiveImage
          lowResSrc="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=10&w=20"
          highResSrc="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2000"
          alt="Mountain landscape"
        />
      </div>

      <div className="w-full max-w-2xl">
        <h2 className="text-gray-400 mb-2">Test 2: Broken Link (Fallback)</h2>
        <ProgressiveImage
          lowResSrc=""
          highResSrc="https://images.unsplash.com/this-image-does-not-exist.jpg"
          alt="Broken image test"
        />
      </div>
    </div>
  );
}
