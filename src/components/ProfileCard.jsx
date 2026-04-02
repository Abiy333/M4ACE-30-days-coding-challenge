// src/components/ProfileCard.jsx

export default function ProfileCard({ data }) {
  // If there's no data yet, don't render the real card
  if (!data) return null;

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm w-full max-w-md bg-white">
      <img
        src={data.avatarUrl}
        alt="User avatar"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-lg font-bold text-gray-900 leading-none">
          {data.username}
        </h2>
        <p className="text-sm text-gray-500 leading-none">{data.bio}</p>
      </div>
    </div>
  );
}
