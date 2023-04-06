export type InitialValues = {
  active: boolean;
  details: string;
  name: string;
  time: number;
  id:number;
};

export type FormsProps = {
  values: InitialValues;
  setValues: (value: string | number) => void;
};
