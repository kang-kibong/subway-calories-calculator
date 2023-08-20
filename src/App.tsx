import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import BaseLayout from '@components/common/BaseLayout'
import Container from '@components/common/Container'

import { sandwichPage } from './data/sandwichPage'

import PickerPage from '@pages/PickerPage'
import MainPage from '@pages/MainPage'

import { IPage } from './data/type'

interface Pages {
  [key: string]: IPage[]
}

const pages: Pages = {
  sandwich: sandwichPage as IPage[],
}

function App() {
  const [select, setSelect] = useState('')

  return (
    <>
      <BaseLayout>
        <Container>
          <Routes>
            <Route
              path="/"
              element={<MainPage onSelect={select => setSelect(select)} />}
            />
            <Route
              path="/picked"
              element={<PickerPage pages={pages[select]} />}
            />
          </Routes>
        </Container>
      </BaseLayout>
    </>
  )
}

export default App
