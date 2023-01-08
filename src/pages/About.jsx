import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const About = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Page</title>
        </Helmet>
      </HelmetProvider>
      About
    </div>
  )
}

export default About