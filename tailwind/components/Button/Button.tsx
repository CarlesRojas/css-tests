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

  return <button {...rest}>{title}</button>;
};

export default Button;
