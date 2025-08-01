import styled from '@emotion/styled';
import button from '@mui/material/Button';

interface Props {
  children: string;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<Props> = styled(button)`
  && {
    background: violet;
    width: 25px;
    height: 25px;
    min-width: 20px;
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export const BasketItemBtn: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};
