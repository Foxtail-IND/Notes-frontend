import { Route, Routes } from 'react-router'
import './App.css'
import Auth from './pages/Auth'
import Home from './pages/Home'

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
