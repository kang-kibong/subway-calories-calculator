import styled from "@emotion/styled";
import Banner from "@components/Banner";

import { sandwich, group, morning, salad, smile, wrap } from "@assets/images/";
import Category from "@components/Catogory";

interface Props {
  onSelect(select: string): void;
}

const menus = [
  {
    id: 1,
    name: "샌드위치",
    color: "#e85a1c",
    image: sandwich,
  },
  {
    id: 2,
    name: "랩ㆍ기타",
    color: "#85c441",
    image: wrap,
  },
  {
    id: 3,
    name: "샐러드",
    color: "#0d9133",
    image: salad,
  },
  {
    id: 4,
    name: "아침메뉴",
    color: "#f2b701",
    image: morning,
  },
  {
    id: 5,
    name: "스마일 썹",
    color: "#00a5dd",
    image: smile,
  },
  {
    id: 6,
    name: "단체메뉴",
    color: "#fa8306",
    image: group,
  },
];

const MainPage = ({ onSelect, ...props }: Props) => {
  return (
    <>
      <Banner>
        <Description>원하는 칼로리의 메뉴를 선택하세요.</Description>
        <MenuContainer>
          {menus.map((menu) => (
            <Category key={menu.id} onSelect={onSelect} menu={menu} />
          ))}
        </MenuContainer>
      </Banner>
    </>
  );
};

export default MainPage;

const Description = styled.span`
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
