import { DataTypes } from "../../../types";

export type FormsProps = {
  values: DataTypes;
  setValues: (value: string | number) => void;
};
