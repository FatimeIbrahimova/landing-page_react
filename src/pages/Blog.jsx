import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Blog = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog Page</title>
        </Helmet>
      </HelmetProvider>
      Blog
    </div>
  )
}

export default Blog