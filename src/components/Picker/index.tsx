import PickerItem from './PickerItem'

import styled from '@emotion/styled'
import { IPage } from '@/data/type'

interface Props extends IPage {
  onSelect?(select: string): void
}

const Picker = ({
  onSelect,
  id,
  title,
  description,
  contents,
  ...props
}: Props) => {
  return (
    <PickerContainer {...props}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PickContainer>
        {contents.map(content => (
          <PickerItem
            key={content.id}
            id={content.id}
            name={content.name}
            image={content.image}
            alt={content.alt}
            calories={content.calories}
          />
        ))}
      </PickContainer>
    </PickerContainer>
  )
}

export default Picker

const PickerContainer = styled.div``

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
`

const Description = styled.span`
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
`

const PickContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100dvh;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  overflow: scroll;
`
