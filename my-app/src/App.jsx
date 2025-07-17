import { useState } from 'react'
import Header from "./components/header"
import MainContainer from './components/Main-Container'
import './styles.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <MainContainer/>
    </>
  )
}

export default App
