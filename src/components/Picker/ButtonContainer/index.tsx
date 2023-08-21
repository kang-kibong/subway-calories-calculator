import styled from '@emotion/styled'

import Button from '@components/common/Button'

interface Props {
  onDecreasePageId(): void
  onIncreasePageId(): void
}

const ButtonContainer = ({ onDecreasePageId, onIncreasePageId }: Props) => {
  return (
    <Container>
      <Button onClick={onDecreasePageId}>이전</Button>
      <Button onClick={onIncreasePageId}>다음</Button>
    </Container>
  )
}

export default ButtonContainer

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    width: 175px;
    margin-right: 20px;
  }

  & button:last-of-type {
    margin-right: 0;
  }
`
