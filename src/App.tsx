import { Route, Routes } from 'react-router-dom'
import { createContext, useEffect } from 'react'
import About from './pages/about/About'
import Counter from './pages/counter/Counter'
import Home from './pages/Home'
import List from './pages/list/List'
import Header from './components/common/Header/Header'
const context = createContext('right')
const App = () => {
  useEffect(() => {
    console.log('mount')
    return () => {}
  }, [])
  return (
    <context.Provider value={'right'}>
      <Header></Header>
      <div className={'app_container'}>
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/about'} element={<About />}></Route>
          <Route path={'/counter'} element={<Counter />}></Route>
          <Route path={'/list'} element={<List />}></Route>
        </Routes>
      </div>
    </context.Provider>
  )
}

export default App
