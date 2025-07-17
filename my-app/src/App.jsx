import { useState } from 'react'
import Header from "./components/header"
import MainContainer from './components/Main-Container'
import './styles.css'
import './App.css'
import { Routes, Router, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainContainer />}/>
          //Pages go here!
        </Route>
      </Routes>
    </>
  )
}

export default App
