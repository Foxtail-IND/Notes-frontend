import { Route, Routes } from 'react-router'
import Auth from './pages/Auth'
import Home from './pages/Home'
// import ProtectedRoute from './services/ProtectedRoute'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path="/unauthorized" element={<Auth />} />
      <Route path="/home" element={
        <Home />
      } />
      <Route path="/home/:noteId" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
