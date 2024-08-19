import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  const [color] = useState("#0000FF")
  document.body.style.backgroundColor = color

  return (
    <Routes>
      <Route path="/" />
    </Routes>
  )
}

export default App;