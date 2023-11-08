import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchMinifigParts } from "../../slices/minifigSlice";
import { RootState } from "../../store/store";
import Spinner from "../Spinner/Spinner";

export default function Details({ index }: { index: number }) {
  const dispatch = useAppDispatch()
  const apiData = useAppSelector((state: RootState) => state.minifigReducer)


  useEffect(() => {
    dispatch<any>(fetchMinifigParts(index))
  }, [dispatch, index])

  if (apiData.error) {
    return <div>Error: {apiData.error}</div>
  }
  if (apiData.loading !== 'fulfilled' || !apiData.data?.[index]?.parts) {
    return <Spinner />
  }

  return <ul>
    {apiData.data?.[index]?.parts?.results.map(({ part }) => {
      return <li className="border-b border-b-sky-50 py-4" key={part.name}>
        <figure className="flex gap-4 items-center">
          <img src={part.part_img_url} alt={part.name} className="h-16 w-16" />
          <figcaption className="text-xs">
            {part.name}
          </figcaption>
        </figure>
      </li>
    })}
  </ul>
}
