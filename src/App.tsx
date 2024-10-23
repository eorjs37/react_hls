import { Route, Routes } from 'react-router-dom'
import { createContext } from 'react'
import About from './pages/about/About'
import Counter from './pages/counter/Counter'
import Home from './pages/Home'
import Header from './components/common/Header/Header'
const context = createContext('right')
const App = () => {
  return (
    <context.Provider value={'right'}>
      <Header></Header>
      <div className={'app_container'}>
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/about'} element={<About />}></Route>
          <Route path={'/counter'} element={<Counter />}></Route>
        </Routes>
      </div>
    </context.Provider>
  )
}

export default App
