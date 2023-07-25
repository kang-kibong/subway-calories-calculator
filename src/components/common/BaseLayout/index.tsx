import styled from "@emotion/styled";

const BaseLayout = () => {
  return <LayoutContainer></LayoutContainer>;
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
