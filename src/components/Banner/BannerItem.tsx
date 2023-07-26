import styled from "@emotion/styled";
import sandwich from "@assets/images/sandwiches/blt.png";

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
  return <ItemContainer color={color}>{name}</ItemContainer>;
};

export default BannerItem;

const ItemContainer = styled.div<{ color: string }>`
  display: inline-block;
  height: 250px;
  width: 50%;
  color: #fff;
  background-color: ${({ color }) => color};
`;
