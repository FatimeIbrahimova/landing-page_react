import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Portfolio = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio Page</title>
        </Helmet>
      </HelmetProvider>
      Portfolio
    </div>
  )
}

export default Portfolio