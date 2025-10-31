import type { Data } from "./Data.ts";
import TrickCard from "./TrickOrTreatCard.tsx";

export default function TrickOrTreatList({
  addresses,
  onAddressChanged,
}: {
  addresses: Data[];
  onAddressChanged: (item: Data) => void;
}) {
  return (
    <div className="space-y-3">
      {addresses.map((addr) => (
        <TrickCard key={addr.id} address={addr} onAddressChanged={onAddressChanged} />
      ))}
    </div>
  );
}
