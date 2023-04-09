
import { FormikValues } from "formik";
import { InitialValues } from "../../containers/AddEvent/entities";

export type DialogEntity = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  title: string;
  onSubmit: (values: FormikValues) => void;
  ButtonTitile:string;
  initialValues?:InitialValues

};
