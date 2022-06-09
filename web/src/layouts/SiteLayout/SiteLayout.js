import styles from './site-layout.module.scss'
import { Link, routes } from '@redwoodjs/router'

import { CONSTANTS } from 'src/utils/constants'

const SiteLayout = ({ children }) => {
  return (
    <>
      <header className={styles.container}>
        <Link to={routes.home()}>
          <h1>{CONSTANTS.SITE_NAME}</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default SiteLayout
