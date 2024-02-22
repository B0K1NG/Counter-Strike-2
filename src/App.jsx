import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/pages/News'
import Home from './components/pages/Home'
import Livestreams from './components/pages/Livestreams'
import Updates from './components/pages/Updates'
import Footer from './components/Footer'

function App() {
  return <div className="app">
    <Navbar />
    <Routes>
      <Route path='/'element= { <Home /> } />
      <Route path='/news'element= { <News /> } />
      <Route path='/livestreams'element= { <Livestreams /> } />
      <Route path='/updates'element= { <Updates /> } />
      </Routes>
      <Footer></Footer>
  </div>
}

export default App
