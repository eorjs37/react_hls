import { Link } from 'react-router-dom'
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
        </ul>
      </nav>
      <div>
        <video src={'https://daegeon-everybody.s3.ap-northeast-2.amazonaws.com/video/video1.mp4'} controls></video>
      </div>
    </div>
  )
}

export default Home
