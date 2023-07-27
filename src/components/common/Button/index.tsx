import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?(): void;
}

const Button = ({ children, onClick, ...props }: Props) => {
  return (
    <ButtonContainer onClick={onClick} {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  border: none;
  width: 100%;
  color: #fff;
  background-color: #ffc300;
  border-radius: 12px;
  /* small: font-size: 12px */
  font-size: 18px;
  padding: 5px 11px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 3px -3px 0px 0px rgba(255, 255, 255, 0.4) inset;
  }

  &:active {
    box-shadow: none;
    opacity: 0.7;
  }
`;
