export type InitialValues = {
  active: boolean;
  details: string;
  name: string;
  id:number;
};

export type FormsProps = {
  values: InitialValues;
  setValues: (value: string | number) => void;
};
