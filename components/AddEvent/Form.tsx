import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";


import { Input } from "..";
import { initialValues } from "../../containers/AddEvent/util";
import { added } from "../../utils/slices/listSlice";

export const Forms = ({ closeModal }: { closeModal: () => void }) => {
  const dispatch = useDispatch();

  const onSubmit = (values: any) => {
    dispatch(added(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <div className="mx-auto">
        <Form>
          <Field name="name">
            {(props: any) => {
              const { field } = props;
              return (
                <Input placeholder="Title" type="text" id="name" {...field} />
              );
            }}
          </Field>
          <Field name="time">
            {(props: any) => {
              const { field } = props;

              return (
                <Input placeholder="Time" type="text" id="time" {...field} />
              );
            }}
          </Field>
          <Field name="details">
            {(props: any) => {
              const { field } = props;
              return (
                <Input
                  placeholder="Detail goes here"
                  type="text"
                  id="details"
                  filed={false}
                  {...field}
                />
              );
            }}
          </Field>

          <div className="mt-4">
            <button
              type="submit"
              className=" w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={closeModal}
            >
              Add
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};
