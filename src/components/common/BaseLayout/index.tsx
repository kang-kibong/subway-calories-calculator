import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default BaseLayout;

const LayoutContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 480px;
  height: 100vh;
  background-color: #fff;
`;
