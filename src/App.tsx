import { Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import Home from './pages/Home'
const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />}></Route>
      <Route path={'/about'} element={<About />}></Route>
    </Routes>
  )
}

export default App
