import Header from "@components/Header";
import Container from "@components/common/Container";
import BaseLayout from "@components/common/BaseLayout";
import Banner from "@components/Banner";

import styled from "@emotion/styled";

const Main = () => {
  return (
    <>
      <BaseLayout>
        <Header />
        <Background>
          <Container>
            <Banner />
          </Container>
        </Background>
      </BaseLayout>
    </>
  );
};

export default Main;

const Background = styled.div`
  background-color: #f6f6f6;
  height: 100vh;
`;
