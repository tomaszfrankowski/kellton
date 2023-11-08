import { Link } from "react-router-dom"
import MinifigsList from "../../components/MinifigsList/MinifigsList"
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";

export default function Pick() {
  const selectedIndex = useAppSelector((state: RootState) => state.minifigReducer.selectedIndex);

  return <main className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center gap-4">
    <MinifigsList />
    <Link to="/checkout">
      <button type="button" disabled={selectedIndex === null} className="bg-lego-yellow text-black py-2 px-6 rounded-full disabled:opacity-50">Proceed to shipment</button>
    </Link>
  </main>
}
