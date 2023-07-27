import Button from "@components/common/Button";
import styled from "@emotion/styled";
import BannerItem from "./BannerItem";
import { sandwich, group, morning, salad, smile, wrap } from "@assets/images/";

const Banner = () => {
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

  return (
    <BannerContainer>
      <Description>원하는 칼로리의 메뉴를 선택하세요.</Description>
      <MenuContainer>
        {menus.map((menu) => (
          <BannerItem key={menu.id} menu={menu} />
        ))}
      </MenuContainer>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 32px 12px;
  text-align: center;
  border-radius: 30px 0 30px 0;
`;

const Description = styled.span`
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
