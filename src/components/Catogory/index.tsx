import styled from '@emotion/styled'
import { ICategory } from '@/data/type'
import { Link } from 'react-router-dom'

interface Props {
  category: ICategory
  onSelect(select: string): void
}

const Category = ({ onSelect, category, ...props }: Props) => {
  const { name, alt, color, image } = category
  
  return (
    <ItemContainer color={color} {...props}>
      <Link to="/picked" onClick={() => onSelect(alt)}>
        <ImageContainer>
          <img src={image} alt="sandwich" />
        </ImageContainer>
        <strong>{name}</strong>
      </Link>
    </ItemContainer>
  )
}

export default Category

const ItemContainer = styled.div<{ color: string }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 43.5%;
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
