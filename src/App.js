import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './layout/Header/Header'
import Home from './layout/Home'
import Craft from './layout/Craft'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/craft" element={<Craft />} />
      </Routes>
    </Router>
  )
}

export default App
