import React from 'react'
import Helmet from 'react-helmet'
import FooterWrapper from '../components/Footer'

import userConfig from '../../config'

//import GlobalStyle from '../global-styles'

const TemplateWrapper = ({ children }) => (
  <div>
    
    <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
    <meta name="google-site-verification" content={`${userConfig.googleSiteVerification}`} />
      <meta name="author" content={`${userConfig.author}`} />
      <meta name="description" content={`${userConfig.description}`} />
      <meta name="keywords" content={`${userConfig.keywords}`}></meta>
    </Helmet>
    <div>{children}</div>
    <FooterWrapper />
  </div>
)

export default TemplateWrapper
