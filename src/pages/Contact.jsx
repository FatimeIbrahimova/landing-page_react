import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Contact = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Page</title>
        </Helmet>
      </HelmetProvider>
      Contact
    </div>
  )
}

export default Contact