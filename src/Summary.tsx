import type { Data } from "./Data.ts";

export default function Summary({ addresses }: { addresses: Data[] }) {
  const total = addresses.length;
  const available = addresses.filter(a => a.isThereAnyCandyLeft).length;

  const sensitivityCount: Record<string, number> = {};
  addresses.forEach(a => {
    let sens: string[];

    if (Array.isArray(a.sensitivities)) {
      sens = a.sensitivities;
    } else if (a.sensitivities) {
      sens = [a.sensitivities as unknown as string];
    } else {
      sens = ["None"];
    }


    sens.forEach(s => {
      const key = s || "None";
      sensitivityCount[key] = (sensitivityCount[key] || 0) + 1;
    });
  });

  return (
    <section className="bg-orange-100 border border-orange-300 rounded-lg p-3">
      <div className="flex justify-between text-sm sm:text-base">
        <div>All Addresses: <b>{total}</b></div>
        <div>Places with candies: <b>{available}</b></div><br />
        <div>Sensitivities:</div>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {Object.entries(sensitivityCount).map(([key, val]) => (
          <div key={key} className="bg-white rounded px-2 py-1 shadow text-sm">
            {key} — {val}
          </div>
        ))}
      </div><br />
    </section>
  );
}
