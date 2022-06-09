import { MetaTags } from '@redwoodjs/web'

import ArticlesCells from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <ArticlesCells />
    </>
  )
}

export default HomePage
