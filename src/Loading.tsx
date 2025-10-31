export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-orange-800">
      <div className="animate-spin mb-4 border-4 border-orange-600 border-t-transparent rounded-full w-6 h-6"></div>
      <div className="text-center">Betöltés...</div>
    </div>
  );
}
