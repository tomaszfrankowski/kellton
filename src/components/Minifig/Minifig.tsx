import React, { useState } from "react"
import { useAppDispatch } from "../../hooks/hooks";
import { IMinifig } from "../../interfaces/Minifig.interface"
import { setSelectedIndex } from "../../slices/minifigSlice";
import Modal from "../Modal/Modal"

export default function Minifig({ minifig, index }: { minifig: IMinifig, index: number }) {
  const dispatch = useAppDispatch()
  const [isModalOpen, setModalOpen] = useState(false)

  return <li className="w-full">
    <input id={minifig.set_num} type="radio" value={minifig.set_num} name="minifig" className="hidden peer" onChange={() => dispatch(setSelectedIndex(index))} />
    <label htmlFor={minifig.set_num} className="p-4 bg-white text-black rounded-3xl peer-checked:ring-lego-yellow peer-checked:ring-4 flex flex-col h-full justify-between">
      <figure className="mb-4">
        <img src={minifig.set_img_url} alt={minifig.name} width="100%" />
        <figcaption className="text-center text-xl">
          {minifig.name}
        </figcaption>
      </figure>
      <button className="mx-auto block underline text-xs uppercase" onClick={(e) => { e.stopPropagation(); setModalOpen(true) }}>View Details</button>
    </label>

    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} index={index} />
  </li >
}
