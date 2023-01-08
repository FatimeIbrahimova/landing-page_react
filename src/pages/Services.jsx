import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Services = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Services Page</title>
        </Helmet>
      </HelmetProvider>
      Services
    </div>
  )
}

export default Services