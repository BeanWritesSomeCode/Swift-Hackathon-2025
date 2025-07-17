import { useState } from 'react'
import Header from "./components/header"
import MainContainer from './components/Main-Container'
import Community from './components/Community'
import './styles.css'
import './App.css'
import { Routes, Router, Route } from 'react-router-dom'
import Cat from './components/cat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
            <Route index element={<MainContainer />} />
            <Route path = "community">
              <Route index element={<Community />} />
              <Route path="cat" element={<Cat />} />
            </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
