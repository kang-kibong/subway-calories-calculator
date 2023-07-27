import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Banner = ({ children, ...props }: Props) => {
  return <BannerContainer>{children}</BannerContainer>;
};

export default Banner;

const BannerContainer = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 32px 12px;
  text-align: center;
  border-radius: 30px 0 30px 0;
`;
