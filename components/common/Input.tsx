import { Props } from "../entities/input";

export const Input = ({
  placeholder,
  value,
  setValue,
  type,
  id,
  filed = true,
  name,
  ...rest
}: Props) => {
  return (
    <div className="mb-2">
      {filed ? (
        <input
          type={type}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder={placeholder}
          name={name}
          value={value}
          {...rest}
        />
      ) : (
        <textarea
          rows={5}
          cols={5}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          {...rest}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
      )}
    </div>
  );
};
