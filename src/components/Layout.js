import React from 'react'
import Helmet from 'react-helmet'
import FooterWrapper from '../components/Footer'

import userConfig from '../../config'

const TemplateWrapper = ({ children }) => (
  <div>
    
    <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
    <meta name="google-site-verification" content={`${userConfig.googleSiteVerification}`} />
      <meta name="author" content={`${userConfig.author}`} />
      <meta name="description" content={`${userConfig.description}`} />
    </Helmet>
    <div>{children}</div>
    <FooterWrapper />
  </div>
)

export default TemplateWrapper
