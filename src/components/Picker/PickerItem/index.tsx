import { IContent } from '@/data/type'
import styled from '@emotion/styled'

const PickerItem = ({ id, name, image, alt, calories, ...props }: IContent) => {
  return (
    <ItemContainer {...props}>
      <ImageContainer>
        <img src={image} alt={alt} />
        <Title>{name}</Title>
        <Calories>{calories} Kcal</Calories>
      </ImageContainer>
    </ItemContainer>
  )
}

export default PickerItem

const ItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  width: 42.5%;
  margin: 14px;
  background-color: ${({ color }) => color};
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  & a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const ImageContainer = styled.div`
  width: 200px;
  height: auto;

  & img {
    width: 100%;
    -webkit-user-drag: none;
  }
`

const Title = styled.h1`
  margin-bottom: 12px;
  color: #686868; 
`

const Calories = styled.strong`
  font-size: 14px;
  color: #009223;
`
