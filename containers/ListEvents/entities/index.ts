import { InitialValues } from "../../AddEvent/entities";

export type Props = {
  setValue: (val: string, item: InitialValues) => void;
  data: InitialValues;
};
