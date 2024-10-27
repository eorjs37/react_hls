import * as styles from './Header.module.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link to={'/'} className={'link'}>
          {'HEADER11'}
        </Link>
      </h1>
    </header>
  )
}

export default Header
