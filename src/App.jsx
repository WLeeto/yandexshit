import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <NewsContainer props={news}>
        <NewsElement />
      </NewsContainer>

      <NaviBarContainer>
        <NaviBar>
          <SearchBar />
        </NaviBar>
      </NaviBarContainer>

      <AdvertisingBanner />

      <InterestsContainer props={interests}>
        <InterestsElement />
      </InterestsContainer>
    </>
  )
}

export default App
