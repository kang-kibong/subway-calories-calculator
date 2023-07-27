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
  padding: 24px 12px;
`;

// 샌드위치 => 빵(1) => 치즈(2) => 야채(3) => 소스(4) => 쿠키(5) => 음료(6) => 결과
