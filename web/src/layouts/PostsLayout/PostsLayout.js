import styles from './posts-layout.module.scss'
import globalStyles from '/src/vars/_global.module.scss'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Toaster } from '@redwoodjs/web/toast'

import Nav from 'src/components/Nav/Nav'
import PostsNav from 'src/components/Post/PostsNav/PostsNav'

const PostsLayout = ({ children }) => {
  const { isAuthenticated } = useAuth()
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className={styles.container}>
        <div className={globalStyles.constraint}>
          {/* header */}
          <div>
            <h1>
              <Link to={routes.home()}>FoundFox Admin</Link>
            </h1>
          </div>
          {/* main navigation */}
          <Nav />
          {/* admin panel */}
          {isAuthenticated && <PostsNav />}
        </div>
      </header>
      {/* content */}
      <main className={globalStyles.constraint}>{children}</main>{' '}
    </>
  )
}

export default PostsLayout
