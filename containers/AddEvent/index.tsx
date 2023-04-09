import { useState } from "react";
import Button from "../../components/common/Button";
import { Dialogs, Forms } from "../../components";
import { useDispatch } from "react-redux";
import { added } from "../../utils/slices/listSlice";

export const AddEvent = () => {
  const dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(false);
  const onSubmit = (values: any) => {
    dispatch(added(values));
  };
  return (
    <>
      <div className="w-1/5 mx-auto mt-10">
        <Button title="Add a task" onClicke={() => setIsOpen(true)} />
      </div>
      <Dialogs
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Add a task"
        onSubmit={onSubmit}
        ButtonTitile="Add"
      />
    </>
  );
};
