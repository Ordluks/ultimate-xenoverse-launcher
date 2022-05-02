import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import BottomBar from './components/BottomBar/BottomBar'
import TitleBar from './components/TitleBar/TitleBar'

export default function App() {
  return (
    <Router>
      <div className='app' >
        <TitleBar />
        <div className='content'>
          <Routes>

          </Routes>
        </div>
        <BottomBar />
      </div>
    </Router>
  )
}
