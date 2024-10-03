import Home from './pages/Home'
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Favorite from './pages/Favorite'

function App() {
  

  return (
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/favorite' element={<Favorite />} />
  </Routes>
 </BrowserRouter>
  )
}

export default App
