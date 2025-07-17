import { useState } from 'react'
<<<<<<< Updated upstream
import Header from "./components/header"
import MainContainer from './components/Main-Container'
import Sidebar from './components/Sidebar'
=======
import reactLogo from './assets/react.svg'
import avatar from './assets/avatar.jpg'
import avatar2 from './assets/cavatar.png'
import viteLogo from '/vite.svg'
import Header from "./components/header"
import Post from "./components/Post"
>>>>>>> Stashed changes
import './styles.css'
import './css/sidebar.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
<<<<<<< Updated upstream
      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className={`main-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainContainer />} />
            {/* Pages go here */}
          </Route>
        </Routes>
      </div>
=======
    <Header/>
    <Post headline="We love cats!" 
    text="Cats are super duper cool! They formed a symbiotic relationship with humans."
    avatar={avatar2}/>
    <Post headline="Welcome to the new tribe!" text="We are so happy to welcome ServiceNow to our tribe!"
    avatar={avatar}/>
>>>>>>> Stashed changes
    </>
  )
}

export default App
