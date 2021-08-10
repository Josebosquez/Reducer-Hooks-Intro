import React from 'react'
import Parent from "./components/Parent/Parent"
import Child from "./components/Parent/Child"
import Child2 from "./components/Parent/Child2"
import Child3 from "./components/Parent/Child3"


function App() {
  return (
    <div>
      <Parent>
        <h1>
        Good morning Class!
        </h1>
        <div>hehe</div>
        <p>1</p>
      </Parent>
      <Parent>
        <Child/>
        <Child2/>
        <Child3/>
      </Parent>
    </div>
  )
}

export default App
