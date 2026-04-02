export default function SkeletonCard() {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm w-full max-w-md bg-white">
      <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
      <div className="flex flex-col gap-2 w-full">
        <div className="w-3/4 h-7 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="w-1/2 h-5 rounded-full bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
}
