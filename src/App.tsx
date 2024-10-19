import { Route, Routes } from 'react-router-dom'
import { createContext } from 'react'
import About from './pages/about/About'
import Home from './pages/Home'
const context = createContext('right')
const App = () => {
  return (
    <context.Provider value={'right'}>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/about'} element={<About />}></Route>
      </Routes>
    </context.Provider>
  )
}

export default App
