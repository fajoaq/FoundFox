import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article key={article.id}>
      <header>
        <Link to={routes.article({ id: article.id })}>
          <h2>{article.title}</h2>
        </Link>
      </header>
      <p>{article.body}</p>
      <p>
        Spotted: {article.createdAt}, at {article.location}
      </p>
    </article>
  )
}

export default Article
