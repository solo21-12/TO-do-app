import { useState } from "react";
import Button from "../../components/common/Button";
import { Dialogs } from "../../components";
import { useDispatch } from "react-redux";
import { added } from "../../utils/slices/listSlice";
import { FormikValues } from "formik";

export const AddEvent = () => {
  const dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(false);
  const onSubmit = (values: FormikValues) => {
    values.id = Math.floor(Math.random() * 100)
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
