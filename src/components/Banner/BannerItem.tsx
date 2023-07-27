import styled from "@emotion/styled";

// 이미지 타입을 어떻게 정해야 하는지?

interface Props {
  menu: {
    id: number;
    name: string;
    color: string;
    image: string;
  };
}

const BannerItem = ({ menu, ...props }: Props) => {
  const { name, color, image } = menu;
  return (
    <ItemContainer color={color}>
      <ImageContainer>
        <img src={image} alt="sandwich" />
      </ImageContainer>
      <strong>{name}</strong>
    </ItemContainer>
  );
};

export default BannerItem;

const ItemContainer = styled.div<{ color: string }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 45%;
  margin: 10px;
  color: #fff;
  font-size: 20px;
  background-color: ${({ color }) => color};
  border-radius: 14px;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: auto;

  & img {
    width: 100%;
  }
`;
