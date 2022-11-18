import styled from 'styled-components';
import { Theme } from '../../styles/theme';

export enum ButtonType {
  PRIMARY,
  SECONDARY
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  buttonType: ButtonType;
}

const MainButton = styled.button<{ buttonType: ButtonType; theme: Theme }>`
  position: relative;
  display: block;
  padding: 1rem 2rem 0.85rem 2rem;
  letter-spacing: 0.2rem;
  text-align: center;
  text-transform: uppercase;
  background-color: ${({ buttonType, theme }) =>
    buttonType === ButtonType.PRIMARY
      ? theme.color.primary
      : buttonType === ButtonType.SECONDARY
      ? 'rgb(169, 169, 169)'
      : 'transparent'};
  color: black;
  box-shadow: 0 0 0 1px black, 0 6px 0 0 black;
  transform: translateY(0);
  cursor: pointer;
  font-weight: 600;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 0 1px black, 0 11px 0 0 black;
  }
`;

MainButton.defaultProps = {
  buttonType: ButtonType.PRIMARY
};

const Button = (props: ButtonProps) => {
  const { title, buttonType, ...rest } = props;

  return (
    <MainButton buttonType={buttonType} {...rest}>
      {title}
    </MainButton>
  );
};

export default Button;
