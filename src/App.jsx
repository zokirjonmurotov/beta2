import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Header from './components/Header'
import NotFound from './components/NotFound'


function App() {

  return (
    <div>
      <Header/>
      <h1>Salom</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <h1>Hello Foxes</h1>
      <h2>Hello hackers</h2>
    </div>
  )
}

export default App
