import Minifig from "../Minifig/Minifig";
import { useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import { IMinifig } from "../../interfaces/Minifig.interface";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchMinifigurines } from "../../slices/minifigSlice";
import { RootState } from "../../store/store";

export default function MinifigsList() {
  const dispatch = useAppDispatch()
  const apiData = useAppSelector((state: RootState) => state.minifigReducer)

  useEffect(() => {
    dispatch<any>(fetchMinifigurines())
  }, [dispatch])

  if (apiData.error) {
    return <div>Error: {apiData.error}</div>;
  }
  if (apiData.loading !== 'fulfilled') {
    return <Spinner />;
  }

  return <fieldset>
    <legend className="text-3xl text-center mb-4"> Choose your minifig</legend >
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-stretch">
      {apiData.data?.map((minifig: IMinifig, index: number) => <Minifig minifig={minifig} key={minifig.set_num} index={index} />)}
    </ul>
  </fieldset>
}
