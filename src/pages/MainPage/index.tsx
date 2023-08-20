import styled from '@emotion/styled'
import Banner from '@components/Banner'

import Category from '@components/Catogory'
import { categories } from '@data/categories'

interface Props {
  onSelect(select: string): void
}

const MainPage = ({ onSelect, ...props }: Props) => {
  return (
    <>
      <Banner>
        <Description>원하는 칼로리의 메뉴를 선택하세요.</Description>
        <MenuContainer>
          {categories.map(category => (
            <Category
              key={category.id}
              onSelect={onSelect}
              category={category}
            />
          ))}
        </MenuContainer>
      </Banner>
    </>
  )
}

export default MainPage

const Description = styled.span`
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
`

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`
