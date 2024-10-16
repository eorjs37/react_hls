import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className={'container'}>
            <Link to={'/about'}>{'About'}</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
