import { useState } from "react";

import styled from "@emotion/styled";

import { Page } from "@/data/sandwichPage";

import Banner from "@components/Banner";
import Picker from "@components/Picker";
import Button from "@components/common/Button";

interface Props {
  pages: Page[];
}

const PickerPage = ({ pages, ...props }: Props) => {
  const [pageId, setPageId] = useState(1);

  const handleDecreasePageId = () => {
    if (pageId === 1) return;
    setPageId(pageId - 1);
  };

  const handleIncreasePageId = () => {
    if (pageId === pages[pages.length - 1].id) return;
    setPageId(pageId + 1);
  };

  return (
    <>
      <Banner>
        {pages.map(
          (page) =>
            page.id === pageId && (
              <Picker
                key={page.id}
                id={page.id}
                title={page.title}
                images={page.images}
                description={page.description}
              />
            )
        )}
      </Banner>
      <ButtonContainer>
        <Button onClick={handleDecreasePageId}>이전</Button>
        <Button onClick={handleIncreasePageId}>다음</Button>
      </ButtonContainer>
    </>
  );
};

export default PickerPage;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    width: 175px;
    margin-right: 20px;
  }

  & button:last-of-type {
    margin-right: 0;
    
  }
`;
