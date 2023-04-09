import { FormikValues } from "formik";

export type FormsEntity = {
  closeModal: () => void;
  onSubmit: (values: FormikValues) => void;
  ButtonTitile: string;
  initialValues?: FormikValues;
};
