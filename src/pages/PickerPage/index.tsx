import { useState } from 'react'

import styled from '@emotion/styled'

import Banner from '@components/Banner'
import Picker from '@components/Picker'
import ButtonContainer from '@components/Picker/ButtonContainer'

import { IPage } from '@/data/type'

interface Props {
  pages: IPage[]
}

const PickerPage = ({ pages, ...props }: Props) => {
  const [pageId, setPageId] = useState(1)

  const handleDecreasePageId = () => {
    if (pageId === 1) return
    setPageId(pageId - 1)
  }

  const handleIncreasePageId = () => {
    if (pageId === pages[pages.length - 1].id) return
    setPageId(pageId + 1)
  }

  return (
    <>
      <Banner>
        {pages.map(
          page =>
            page.id === pageId && (
              <Picker
                key={page.id}
                id={page.id}
                title={page.title}
                description={page.description}
                contents={page.contents}
              />
            )
        )}
      </Banner>
      <ButtonContainer
        onDecreasePageId={handleDecreasePageId}
        onIncreasePageId={handleIncreasePageId}
      />
    </>
  )
}

export default PickerPage
