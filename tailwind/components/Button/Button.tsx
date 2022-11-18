export enum ButtonType {
  PRIMARY,
  SECONDARY
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  buttonType: ButtonType;
}

const Button = (props: ButtonProps) => {
  const { title, buttonType, ...rest } = props;

  const variant =
    buttonType === ButtonType.PRIMARY ? '!bg-primary' : buttonType === ButtonType.SECONDARY ? '!bg-[#a9a9a9]' : '';

  return (
    <button
      {...rest}
      className={`relative block px-8 pt-4 pb-[0.85rem] tracking-[0.2rem] text-center uppercase bg-transparent text-[black] shadow-[0_0_0_1px_black,_0_6px_0_0_black] translate-x-0 cursor-pointer font-semibold transition-[box-shadow,transform] duration-200 ease-in-out ${variant} hover:translate-y-[-5px] hover:shadow-[0_0_0_1px_black,_0_11px_0_0_black]`}
    >
      {title}
    </button>
  );
};

export default Button;
