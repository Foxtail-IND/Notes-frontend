import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Auth from './pages/Auth'

function App() {

  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:noteId" element={<Home />} />
    </Routes>
  )
}

export default App
