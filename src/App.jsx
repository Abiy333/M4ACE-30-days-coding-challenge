import React from "react";
import Persist from "./components/Persist";
import ProfileCard from "./components/ProfileCard";
import SkeletonCard from "./components/SkeletonCard";

export default function App() {
  const { data, loading, error } = Persist(
    "https://api.github.com/users/abiy333",
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {loading && <SkeletonCard />};
      {error && (
        <div classname="p-4 bg-red-100 text-red-700 rounded-lg w-full max-w-md border border-red-300">
          {error}
        </div>
      )}
      ;
      {data && !loading && !error && (
        <Persist
          data={{
            avatarUrl: data.avatar_url,
            username: data.name || data.login,
            bio: data.bio || "Frontend Engineering in training",
          }}
        />
      )}
    </div>
  );
}
