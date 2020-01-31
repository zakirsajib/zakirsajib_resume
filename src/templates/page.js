/*
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Form from '../components/Contact'
import Img from 'gatsby-image'
import userConfig from '../../config'
import '../styles/page.css'
import indexStyles from '../styles/index.module.css'
import GitHubButton from 'react-github-btn'

export const PageTemplate = ({ title, content, slug, featureimage }) => {
  return (
    <div>
    <Helmet title={`${title} | ${userConfig.title}`}>
      <meta name="description" content={`${content}`} />
    </Helmet>
    
    {featureimage &&
    <div className={indexStyles.pageImg}><Img fluid={featureimage} alt={title}/></div>
    }
    <section className="section section--gradient">
      <div className="container" id="pageTitle">
        <h1 className="title is-size-3 has-text-weight-bold is-bold-light has-text-centered">{title}</h1>
<GitHubButton href="https://github.com/zakirsajib" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Follow @zakirsajib on GitHub">Follow @zakirsajib</GitHubButton>
      </div>  
      <div className="container">
        <div className="content" dangerouslySetInnerHTML={{ __html: content }}/>
        {slug == 'contact' ? (
          <div className="contactForm" style={{ marginBottom: `4em` }}>
          <Form />
          </div>
        ): null }
      </div>
    </section>
    </div>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <PageTemplate 
      title={page.title} 
      content={page.content}
      slug={page.slug}
      featureimage={page.featured_media.localFile.childImageSharp.fluid}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      featured_media{
	    localFile{
		    childImageSharp{
			    fluid(maxWidth: 1152, quality: 100) {
      				...GatsbyImageSharpFluid
   				}
		    }
	    }
      }
    }
  }
`
*/
