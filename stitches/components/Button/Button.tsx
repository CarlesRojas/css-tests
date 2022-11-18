import { styled } from '../../styles/theme';

export enum ButtonType {
  PRIMARY,
  SECONDARY
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  buttonType: ButtonType;
}

const MainButton = styled('button', {
  position: 'relative',
  display: 'block',
  padding: '1rem 2rem 0.85rem 2rem',
  letterSpacing: '0.2rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  backgroundColor: 'transparent',
  color: 'black',
  boxShadow: '0 0 0 1px black, 0 6px 0 0 black',
  transform: 'translateY(0)',
  cursor: 'pointer',
  fontWeight: 600,
  transition: 'box-shadow 0.2s ease, transform 0.2s ease',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 0 0 1px black, 0 11px 0 0 black'
  },

  variants: {
    buttonType: {
      [ButtonType.PRIMARY]: {
        backgroundColor: '$primaryColor'
      },

      [ButtonType.SECONDARY]: {
        backgroundColor: 'rgb(169, 169, 169)'
      }
    }
  }
});

const Button = (props: ButtonProps) => {
  const { title, buttonType, ...rest } = props;

  return (
    <MainButton buttonType={buttonType} {...rest}>
      {title}
    </MainButton>
  );
};

export default Button;
