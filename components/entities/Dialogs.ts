
import { FormikValues } from "formik";
import { DataTypes } from "../../types";

export type DialogEntity = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  title: string;
  onSubmit: (values: FormikValues) => void;
  ButtonTitile:string;
  initialValues?:DataTypes

};
