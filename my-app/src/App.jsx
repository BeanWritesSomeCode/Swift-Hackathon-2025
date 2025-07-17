import { useState } from 'react'
import Header from "./components/header"
import IndexPage from './components/Index-Page'
import Sidebar from './components/Sidebar'
import KnowledgeZone from './components/Knowledge-Zone'
import './App.css'
import './styles.css'
import './css/sidebar.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className={"main-layout"}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<IndexPage sidebarOpen={sidebarOpen}/>} />
            <Route path="/knowledge" element={<KnowledgeZone sidebarOpen={sidebarOpen}/>} />
            {/* Pages go here */}
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
