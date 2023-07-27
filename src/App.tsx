import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import BaseLayout from "@components/common/BaseLayout";
import Container from "@components/common/Container";

import { Page, sandwichPage } from "./data/sandwichPage";

import PickerPage from "@pages/PickerPage";
import MainPage from "@pages/MainPage";

interface Pages {
  [key: string]: Page[];
}

const page: Pages = {
  샌드위치: sandwichPage as Page[],
};

function App() {
  const [select, setSelect] = useState("");

  return (
    <>
      <BaseLayout>
        <Container>
          <Routes>
            <Route
              path="/"
              element={<MainPage onSelect={(select) => setSelect(select)} />}
            />
            <Route
              path="/picked"
              element={<PickerPage pages={page[select]} />}
            />
          </Routes>
        </Container>
      </BaseLayout>
    </>
  );
}

export default App;
