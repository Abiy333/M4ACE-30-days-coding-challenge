import React from "react";
import ProgressiveImage from "./ProgressiveImage";

export default function MovieCard() {
  return (
    <div className="w-80 bg-indigo-950 shadow-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
      <div className="rounded-3xl w-full object-cover">
        <ProgressiveImage
          lowResSrc="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=10&w=20"
          highResSrc="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800"
          alt="Sci-Fi Movie Poster"
        />
      </div>

      <div>
        <h2 className="text-lg font-bold text-white">Interstellar</h2>
        <p className="text-sm text-gray-300">2014 • Sci-Fi • 8.6/10</p>
        <p className="text-gray-300">
          A team of explorers travel through a wormhole in space in an attempt
          to ensure humanity's survival.
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold mt-4 w-full hover:bg-red-500 transition-colors">
          Watch Trailer
        </button>
      </div>
    </div>
  );
}
