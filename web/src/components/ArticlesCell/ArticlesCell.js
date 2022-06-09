export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      location
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return articles.map((article) => (
    <article key={article.id}>
      <header>
        <h2>{article.title}</h2>
      </header>
      <p>{article.body}</p>
      <p>
        Spotted: {article.createdAt}, at {article.location}
      </p>
    </article>
  ))
}
