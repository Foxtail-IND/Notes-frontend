import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Auth from './pages/Auth'

function App() {

  return (
    <Routes>
      <Route index path="/home" element={<Home />} />
      <Route index path="/login" element={<Auth />} />
    </Routes>
  )
}

export default App
