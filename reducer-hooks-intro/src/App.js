import React from 'react'
import Counter from './components/Counter/Counter'
import CountContextWrapper from './components/context/countContext'

function App() {
  return (
    <div>
      <CountContextWrapper>
      <Counter/>
      </CountContextWrapper>
    </div>
  )
}

export default App