import { useEffect, useState } from "react";
import type { Data } from "./Data.ts";
import Loading from "./Loading.tsx";
import Header from "./Header.tsx";
import Summary from "./Summary.tsx";
import TrickOrTreatList from "./TrickOrTreatList.tsx";
import Footer from "./Footer.tsx";


const API_URL = "https://retoolapi.dev/H3q9DF/data";

export default function App() {
  const [addresses, setAddresses] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchAddresses() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      data.sort((a: Data, b: Data) =>
        a.isThereAnyCandyLeft === b.isThereAnyCandyLeft ? 0 : a.isThereAnyCandyLeft ? -1 : 1
      );
      setAddresses(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function handleChange(item: Data) {
    await fetch(`${API_URL}/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isThereAnyCandyLeft: false }),
    });
    fetchAddresses();
  }

  useEffect(() => {
    fetchAddresses();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <Summary addresses={addresses} />
        <TrickOrTreatList addresses={addresses} onAddressChanged={handleChange} />
      </main>
      <Footer />
    </div>
  );
}
