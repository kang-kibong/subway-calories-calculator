import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <Div>{children}</Div>;
};

export default Container;

const Div = styled.div`
  padding: 0px 12px;
`;
