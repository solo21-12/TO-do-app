import { DataTypes } from "../../../types";

export type Props = {
  setValue?: (val: string, item: DataTypes) => void;
  data: DataTypes;
  completed?:boolean;
};
