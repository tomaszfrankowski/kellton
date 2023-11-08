import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Details from "../../components/Details/Details";
import ShipmentForm from "../../components/ShipmentForm/ShipmentForm";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";

export default function Checkout() {
  const selectedIndex = useAppSelector((state: RootState) => state.minifigReducer.selectedIndex);
  const minifig = useAppSelector((state: RootState) => selectedIndex !== null ? state.minifigReducer.data?.[selectedIndex] : null)
  const navigate = useNavigate()

  useEffect(() => {
    if (selectedIndex === null) {
      navigate("/pick");
    }
  }, [selectedIndex, navigate]);

  if (!minifig) {
    return <main className="container">No minifig</main>
  }

  return <main className="container mx-auto p-4 min-h-screen flex items-center justify-center gap-4 flex-col lg:flex-row">
    <section className="w-full lg:w-2/3">
      <ShipmentForm />
    </section>
    <aside className="w-full lg:w-1/3 text-black bg-white rounded-xl px-4">
      <figure className="mb-4">
        <img src={minifig.set_img_url} alt={minifig.name} width="100%" />
        <figcaption className="text-center text-xl">
          {minifig.name}
        </figcaption>
      </figure>

      <Details index={selectedIndex as number} />
    </aside>
  </main>
}
