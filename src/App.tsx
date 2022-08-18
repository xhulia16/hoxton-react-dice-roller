import { useState } from 'react'

import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  let max=6;
  let min=1;
let randomNumber=(Math.random() * (max - min)) + min
  return (
    <div className="App">
  <button onClick={()=>{setNumber(randomNumber)
   console.log(number)
}
  }
  >Roll the dice</button>
  <button onClick={()=>{setNumber(0)}
  }>Reset</button>

{number===0 ? <h1>result: </h1>: <h1>result: {Math.round(number)}</h1>}
    </div>
  )
}

export default App
