/*
import React from 'react'
//import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import userConfig from '../../config'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PocketShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PocketIcon,
  EmailIcon
} from 'react-share'
import postStyles from '../styles/post.module.css'
import ShareWrapper from '../components/Share'
import JustComments from 'gatsby-plugin-just-comments'

    let url
    if (typeof window !== `undefined`) {
      url = window.location.href;
    }

  export default props => {
    const post = props.data.wordpressPost;
    const { previous, next } = props.pageContext;

  return (
    <Layout>
      <Helmet title={`${post.title} | ${userConfig.title}`}>
        <meta name="description" content={`${post.excerpt}`}/>
      </Helmet>
      	<div className={postStyles.postImg}><Img fluid={post.featured_media.localFile.childImageSharp.fluid} alt={post.title} /></div>
        <section className="section">
        <div className={postStyles.entryHeader}>
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light" dangerouslySetInnerHTML={{ __html: post.title}}/>
      <p style={{color: `#f9fafc`}}>{' '}{post.date} - {post.fields.readingTime.text}</p>
      {post.date != post.modified ? (
      <p style={{color: `#f9fafc`}}><b>Last updated on:</b>{' '}{post.modified}</p>
      ): null }
       </div> 
      <div className="container content">
        <div className="columns">
          <div className="column is-12">               
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <div style={{ marginTop: `4rem` }}>
          <p style={{color: `#272822`}}><b>Last updated on:</b>{' '}{post.modified}</p>
            </div>
            <div style={{ marginTop: `4rem` }}>
              {post.categories && post.categories.length ? (
                  <div>
                  <h4>Categories</h4>
                  <ul className="taglist">
                    {post.categories.map(category => (
                      <li key={`${category.slug}cat`}>
                      <Link to={`/categories/${category.slug}/`}>
                        {category.name}
                      </Link>
                      </li>
		                  ))}
                  </ul>
                </div>
		              ) : null}
                  {post.tags && post.tags.length ? (
                  <div>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {post.tags.map(tag => (
                    <li key={`${tag.slug}tag`}>
                    <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                  </li>
                    ))}
                  </ul>
                </div>
		              ) : null}
             <ShareWrapper>
              {userConfig.showShareButtons && (
               <div className="Demo__some-network">
                <FacebookShareButton url={url} quote={post.title}
                className="Demo__some-network__share-button">
                <FacebookIcon size={32} round={false} />
                </FacebookShareButton>
                </div>
              )}
             {userConfig.showShareButtons && (
             <div className="Demo__some-network">
             <TwitterShareButton url={url} title={post.title}
                className="Demo__some-network__share-button">
                <TwitterIcon size={32} round={false} />
              </TwitterShareButton>
              </div>
						  )}
              {userConfig.showShareButtons && (
              <div className="Demo__some-network">
              <LinkedinShareButton
                url={url}
                windowWidth={750}
                windowHeight={600}
                className="Demo__some-network__share-button">
                <LinkedinIcon size={32} round={false} />
              </LinkedinShareButton>
              </div>
              )}
              {userConfig.showShareButtons && (
              <div className="Demo__some-network">
              <PocketShareButton
                url={url}
                subject={post.title}
                className="Demo__some-network__share-button">
                <PocketIcon size={32} round={false} />
              </PocketShareButton>
              </div>
              )}
              {userConfig.showShareButtons && (
              <div className="Demo__some-network">
              <EmailShareButton
                url={url}
                subject={post.title}
                body="body"
                className="Demo__some-network__share-button">
                <EmailIcon size={32} round={false} />
              </EmailShareButton>
              </div>
              )}
              </ShareWrapper>
              
              <div className="pagination is-centered" role="navigation" aria-label="pagination">
                  {previous && (
                    <Link to={`/${previous.slug}`} rel="prev" className="pagination-previous">← Previous post</Link>
                  )}
                  {next && (
                  <Link to={`/${next.slug}`} rel="next" className="pagination-next">Next post →</Link>
                  )}
              </div>
              <JustComments 
                recaptcha="true"
                disableanonymouslogin="false"
                disableseo="true"
                apikey={userConfig.justCommentsAPI} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    wordpressPost(slug: { eq: $slug }) {
      date(formatString: "MMMM DD, YYYY h:mma")
      modified(formatString: "MMMM DD, YYYY h:mma")
      title
      content
      excerpt
      link
      categories {
        name
        slug
      }
      tags{
        name
        slug
      }
      author {
        name
      }
      fields {
        readingTime {
          text
        }
      }
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
`;
*/