import styles from './nav.module.scss'
import globalStyles from '/src/vars/_global.module.scss'
import { Link, routes } from '@redwoodjs/router'

const Nav = (props) => (
  <nav
    className={globalStyles.constraint}
    aria-label="main navigation"
    {...props}
  >
    <ul className={styles.container}>
      <li>
        <Link to={routes.home()}>Home</Link>
      </li>
      <li>
        <Link to={routes.about()}>About</Link>
      </li>
      <li>
        <Link to={routes.contact()}>Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
