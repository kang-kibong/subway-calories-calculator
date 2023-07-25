import Header from "@components/Header";
import Container from "@components/common/Container";
import BaseLayout from "@components/common/BaseLayout";
import Banner from "@components/Banner";

function App() {
  return (
    <>
      <BaseLayout>
        <Header />
        <Container>
          <Banner />
        </Container>
      </BaseLayout>
    </>
  );
}

export default App;
