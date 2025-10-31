import type { Data } from "./Data.ts";

const sensitivityIcons: Record<string, string> = {
  "LactoseIntolerance": "🥛",
  "GlutenIntolerance": "🌾",
  "NutAllergy": "🥜",
  "None": "🍭",
};

export default function TrickCard({
  address,
  onAddressChanged,
}: {
  address: Data;
  onAddressChanged: (item: Data) => void;
}) {
  return (
    <div
      className={`p-3 rounded-lg shadow-md flex justify-between items-center border-2 ${address.isThereAnyCandyLeft ? "bg-white border-orange-400" : "bg-gray-800 border-gray-600 text-gray-300 opacity-85"
        }`}
    >
      <div>
        <div className="font-semibold">{address.name}</div>
        <div className="text-sm text-gray-600">{address.address}</div>
        <div className="mt-1 flex flex-wrap gap-2">
          {Array.isArray(address.sensitivities)
            ? address.sensitivities.map((s, i) => (
              <span key={i} className="flex items-center gap-1 text-sm">
                <span>{sensitivityIcons[s]}</span>
                <span>{s}</span>
              </span>
            ))
            : (
              <span className="flex items-center gap-1 text-sm">
                <span>{sensitivityIcons[address.sensitivities]}</span>
                <span>{address.sensitivities}</span>
              </span>
            )
          }
        </div>
      </div>
      <button
        onClick={() => onAddressChanged(address)}
        disabled={!address.isThereAnyCandyLeft}
        className={`px-3 py-1 rounded-md text-sm font-medium ${address.isThereAnyCandyLeft
          ? "bg-orange-600 text-white hover:bg-orange-700"
          : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
      >
        No candies left
      </button>
    </div>
  );
}
