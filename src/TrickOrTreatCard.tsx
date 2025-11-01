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
  const hasCandy = address.isThereAnyCandyLeft;

  let sensitivitiesContent;
  if (Array.isArray(address.sensitivities)) {
    sensitivitiesContent = address.sensitivities.map((s, i) => (
      <span key={i} className="flex items-center gap-1 text-sm">
        <span>{sensitivityIcons[s]}</span>
        <span>{s}</span>
      </span>
    ));
  } else {
    sensitivitiesContent = (
      <span className="flex items-center gap-1 text-sm">
        <span>{sensitivityIcons[address.sensitivities]}</span>
        <span>{address.sensitivities}</span>
      </span>
    );
  }

  return (
    <div className={`p-3 rounded-lg shadow-md flex justify-between items-center border-2`}>
      <div>
        <div className="font-semibold">{address.name}</div>
        <div className="text-sm text-gray-600">{address.address}</div>
        <div className="mt-1 flex flex-wrap gap-2">{sensitivitiesContent}</div>
      </div>
      <button onClick={() => onAddressChanged(address)} disabled={!hasCandy} className={`px-3 py-1 rounded-md text-sm font-medium`}>No candies left</button>
    </div>
  );
}
