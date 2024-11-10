import { Link } from 'react-router-dom'
const Home = () => {
  const init = () => {
    console.log('init')
  }

  init()

  return (
    <div>
      <nav>
        <ul>
          <li className={'container'}>
            <Link to={'/about'}>{'About'}</Link>
          </li>
          <li className={'container'}>
            <Link to={'/counter'}>{'Counter'}</Link>
          </li>
          <li className={'container'}>
            <Link to={'/list'}>{'List'}</Link>
          </li>
          <li className={'container'}>
            <Link to={'/memo'}>{'Memo'}</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
