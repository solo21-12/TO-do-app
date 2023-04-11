import { AddEvent, ListEvents } from "../../../containers";
import { getSession } from "next-auth/react";
const Active = () => {
  return (
    <div>
      <div className="  mx-auto">
        <AddEvent />
        <ListEvents />
      </div>
    </div>
  );
};

export default Active;
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
    props: {}, // will be passed to the page component as props
  };
}
