import { FormikValues } from "formik";
import { InitialValues } from "../../containers/AddEvent/entities";

export type FormsEntity = {
  closeModal: () => void;
  onSubmit: (values: FormikValues) => void;
  ButtonTitile: string;
  initialValues?: FormikValues;
};
