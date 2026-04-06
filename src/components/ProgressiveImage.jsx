import React, { useState } from "react";

export default function ProgressiveImage({ lowResSrc, highResSrc, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-64 bg-gray-800 flex items-center justify-center rounded-lg shadow-lg">
        <svg
          className="w-12 h-12 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg bg-gray-900">
      <img
        src={lowResSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover blur-md scale-105"
      />
      <img
        src={highResSrc}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
