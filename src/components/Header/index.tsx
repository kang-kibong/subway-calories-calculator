import styled from "@emotion/styled";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>
        <span>Subway </span>
        Calories Calculator
      </h1>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  background-color: #009223;
  & span {
    color: #ffc300;
  }

  & h1 {
    color: #fff;
    font-size: 24px;
  }
`;
