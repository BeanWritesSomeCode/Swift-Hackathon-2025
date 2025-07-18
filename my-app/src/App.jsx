import { useState } from 'react'
import Header from "./components/header"
import MainContainer from './components/Main-Container'
import Sidebar from './components/Sidebar'
import Community from './components/Community'
import ForumPage from './components/forum'
import './styles.css'
import './css/sidebar.css'
import './css/auto-scroll.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Cat from './components/cat'
import './css/sidebar.css'
import KnowledgeZone from './components/Knowledge-Zone'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className={`main-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Routes>
        <Route path='/' element={<Header />}>
            <Route index element={<MainContainer />} />

            <Route path = "community">
              <Route index element={<Community />} />
              <Route path="cat" element={<Cat />} />
            </Route>

            <Route path = "knowledge">
                <Route index element={<KnowledgeZone/> } />
                <Route path="js-forum" element={<ForumPage/> } />
            </Route>
            
        </Route>
      </Routes>
      </div>
    <Header/>
    </>
  )
}

export default App
