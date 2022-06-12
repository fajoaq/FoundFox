import styles from './posts-nav.module.scss'
import { Link, routes, useLocation } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const PostsNav = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const { pathname } = useLocation()

  return (
    <div className={styles.container}>
      {isAuthenticated ? (
        <div className={styles.login_container}>
          <span>Logged in as {currentUser.email}</span>{' '}
          <button type="button" onClick={logOut}>
            Logout
          </button>
        </div>
      ) : (
        <Link to={routes.login()}>Login</Link>
      )}

      <div className={styles.button_container}>
        <button>
          <Link to={routes.newPost()}>Create Post</Link>
        </button>
        {pathname !== routes.posts() && (
          <button>
            <Link to={routes.posts()}>Edit Posts</Link>
          </button>
        )}
      </div>
    </div>
  )
}

export default PostsNav
