import { useDispatch, useSelector } from "react-redux";
import { Cards } from "../../../components";
import { removed } from "../../../utils/slices/compltedSlice";
import { DataTypes } from "../../../types";
import { getSession } from "next-auth/react";
const Complted = () => {
  const dispatch = useDispatch();
  let { data }: { data: DataTypes[] } = useSelector(
    (state: any) => state.complted
  );

  const handleClick = (action: string, item: DataTypes) => {
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

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
