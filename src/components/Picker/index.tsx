import { Page } from "@/data/sandwichPage";
import PickerItem from "./PickerItem";

import styled from "@emotion/styled";
import { v4 } from "uuid";

interface Props extends Page {
  onSelect?(select: string): void;
}

const Picker = ({
  onSelect,
  id,
  title,
  images,
  description,
  ...props
}: Props) => {
  return (
    <PickerContainer {...props}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PickContainer>
        {images.map((image) => (
          <PickerItem key={v4()} image={image} />
        ))}
      </PickContainer>
    </PickerContainer>
  );
};

export default Picker;

const PickerContainer = styled.div``;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
`;

const Description = styled.span`
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
`;

const PickContainer = styled.div`
  box-sizing: border-box;
  height: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  overflow: auto;
`;
