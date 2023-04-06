type Props = {
  title:string;
  onClicke:()=>void
}

const Button = ({ title ,onClicke}: Props) => {
  return (
    <button className=" bg-black text-white text-xs md:text-sm px-2 py-2 md:px-3 md:py-2 rounded-md hover:text-slate-300 mb-5" onClick={onClicke}>
      {title}
    </button>
  );
};

export default Button;
