export type Props = {
    placeholder: string;
    value?: string | number;
    setValue?: (value: string) => void;
    type: string;
    id: string;
    filed?: boolean;
    name: string;
  };