// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'

import SiteLayout from './layouts/SiteLayout/SiteLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/posts" page={PostPostsPage} name="posts" />
          {/* Lock down signup, until new users are allowed to singup */}
          <Route path="/signup" page={SignupPage} name="signup" />
          <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
          <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        </Set>
      </Private>
      <Set wrap={SiteLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
