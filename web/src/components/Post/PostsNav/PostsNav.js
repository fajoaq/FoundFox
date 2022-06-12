import styles from './posts-nav.module.scss'
import { Link, routes } from '@redwoodjs/router'

const PostsNav = () => {
  return (
    <div className={styles.container}>
      <button>
        <Link to={routes.newPost()}>Create New Post</Link>
      </button>
    </div>
  )
}

export default PostsNav
