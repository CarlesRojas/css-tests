import s from './Button.module.scss';

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

  const variant = buttonType === ButtonType.PRIMARY ? s.primary : s.secondary;

  return (
    <button className={`${s.button} ${variant}`} {...rest}>
      {title}
    </button>
  );
};

export default Button;
