import { Link } from 'react-router-dom'
import Counter from '../components/home/Counter'
const Home = () => {
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
          <li className={'container'}>
            <Link to={'/dummy'}>{'Dummy'}</Link>
          </li>
          <li className={'container'}>
            <Link to={'/usememo'}>{'UseMemo'}</Link>
          </li>
          <li className={'container'}>
            <Link to={'/hls'}>{'Hls'}</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Counter />
        <section></section>
      </main>
    </div>
  )
}

export default Home
