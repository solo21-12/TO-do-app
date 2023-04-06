import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../utils/slices/userSlice";
import { useEffect, useState } from "react";
import { InitialValues } from "../../../containers/AddEvent/entities";
import { Cards } from "../../../components";
import { removed } from "../../../utils/slices/compltedSlice";

const Complted = () => {
  const [Lists, setList] = useState<InitialValues[]>([]);
  const dispatch = useDispatch();
  let { data }: { data: InitialValues[] } = useSelector(
    (state: any) => state.complted
  );

  const handleClick = (action: string, item: InitialValues) => {
    if (action === "remove") {
      dispatch(removed(item.id));
    }
  };
  return (
    <div className=" flex flex-wrap gap-5 mx-auto  w-[80%]">
      {data.map((list) => (
        <Cards setValue={handleClick} key={list.id} data={list} completed />
      ))}
    </div>
  );
};

export default Complted;
