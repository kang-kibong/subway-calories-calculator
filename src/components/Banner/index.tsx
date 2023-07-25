import Button from "@components/common/Button";
import styled from "@emotion/styled";

const Banner = () => {
  const menu = [
    "샌드위치",
    "랩ㆍ기타",
    "샐러드",
    "아침메뉴",
    "스마일 썹",
    "단체메뉴",
  ];

  return (
    <BannerContainer>
      <Description>원하는 칼로리의 메뉴를 선택하세요.</Description>
      <MenuContainer>
        {menu.map((item) => (
          <Button>{item}</Button>
        ))}
      </MenuContainer>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  background-color: #009223;
  width: 100%;
  padding: 32px 12px;
  margin: 24px 0 24px 0;
  border-radius: 12px;
  text-align: center;
`;

const Description = styled.span`
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
  color: #fff;
`;

const MenuContainer = styled.div`
  & button {
    margin-bottom: 20px;
  }

  & button:last-of-type {
    margin-bottom: 0;
  }
`;
