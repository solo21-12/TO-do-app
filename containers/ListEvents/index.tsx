import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "../../components";
import { removed, complted } from "../../utils/slices/listSlice";
import { DataTypes } from "../../types";
export const ListEvents = () => {
  const dispatch = useDispatch();
  let { data }: { data: DataTypes[] } = useSelector(
    (state: any) => state.list
  );
  const handleClick = (action: string, item: DataTypes) => {
    if (action === "remove") {
      dispatch(removed(item.id));
    }
    if (action === "complete") {
      dispatch(complted(item));
    }
  };

  return (
    <div className=" flex flex-wrap gap-5 mx-auto  w-[80%]">
      {data.map((data: DataTypes) => (
        <Cards setValue={handleClick} key={data.id} data={data} completed={false} />
      ))}
    </div>
  );
};
