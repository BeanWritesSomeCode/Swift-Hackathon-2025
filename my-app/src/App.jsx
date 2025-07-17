import { useState } from 'react'
import Header from "./components/header"
import MainContainer from './components/Main-Container'
import Sidebar from './components/Sidebar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import './css/sidebar.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className={`main-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainContainer />} />
            {/* Pages go here */}
          </Route>
        </Routes>
      </div>
    <Header/>
    </>
  )
}

export default App
