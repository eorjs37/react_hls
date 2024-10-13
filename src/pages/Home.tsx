import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className={'title'}>
            <Link to={'/about'}>{'About'}</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
