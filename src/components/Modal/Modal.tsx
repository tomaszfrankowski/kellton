import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";
import Details from "../Details/Details";

export default function Modal({ isOpen, onClose, index }: { isOpen: boolean, onClose: Function, index: number }) {
  const apiData = useAppSelector((state: RootState) => state.minifigReducer)

  if (!isOpen) return null;
  return (
    <dialog open={isOpen} className="container rounded-3xl p-8 top-16 shadow-2xl">
      <button autoFocus onClick={(e) => onClose(e)} className="text-3xl absolute top-4 right-4">&times;</button>
      There are {apiData.data?.[index]?.num_parts} part {} in this minifig
      <Details index={index} />
    </dialog>

  );
};

