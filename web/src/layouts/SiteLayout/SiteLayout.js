import styles from './site-layout.module.scss'
import globalStyles from 'src/vars/_global.module.scss'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import { CONSTANTS } from 'src/utils/constants'
import Nav from 'src/components/Nav/Nav'
import PostsNav from 'src/components/Post/PostsNav/PostsNav'

const SiteLayout = ({ children }) => {
  const { isAuthenticated } = useAuth()
  return (
    <>
      <header className={styles.container}>
        {/* header */}
        <div className={globalStyles.constraint}>
          <Link to={routes.home()}>
            <h1>{CONSTANTS.SITE_NAME}</h1>
          </Link>
          {/* main navigation */}
          <Nav />
          {/* admin panel */}
          {isAuthenticated && <PostsNav />}
        </div>
      </header>
      {/* content */}
      <main className={globalStyles.constraint}>{children}</main>
    </>
  )
}

export default SiteLayout
