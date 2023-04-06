import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "../../components";
import { InitialValues } from "../AddEvent/entities";
import { removed, complted } from "../../utils/slices/listSlice";
export const ListEvents = () => {
  const dispatch = useDispatch();
  let { data }: { data: InitialValues[] } = useSelector(
    (state: any) => state.list
  );
  const handleClick = (action: string, item: InitialValues) => {
    if (action === "remove") {
      dispatch(removed(item.id));
    }
    if (action === "complete") {
      dispatch(complted(item));
    }
  };

  return (
    <div className=" flex flex-wrap gap-5 mx-auto  w-[80%]">
      {data.map((data: InitialValues) => (
        <Cards setValue={handleClick} key={data.id} data={data} completed={false} />
      ))}
    </div>
  );
};
