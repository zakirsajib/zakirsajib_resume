/*
import React , { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import github from '../img/github-icon.svg'
import linkedin from '../img/linkedin-icon.svg'
//import instagram from '../img/instagram-icon.svg'
import home from '../img/link-icon.svg'
//import logo from '../img/main.jpg'
import userConfig from '../../config'

class Navbar extends Component {
  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          const {target} = el.dataset;
          const $target = document.getElementById(target);

          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`  
        {
            allWordpressPage { 
              edges {
                node {
                  title
                  wordpress_id
                  slug
                }
              }
            }
          }
        `}
        render={data => {
          const wordpressPages = data.allWordpressPage.edges;
          return (
            <nav className="navbar is-transparent" id="header">
              <div className="container">
                <div className="navbar-brand">
                  <Link to="/" className="navbar-item logo" style={{fontSize: `1.8rem`,fontWeight: `700`}}>NIRVANA</Link>
                  <div className="navbar-burger burger" data-target="navMenu">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div id="navMenu" className="navbar-menu">
                  <div className="navbar-start has-text-centered">
                    {wordpressPages.map(page => (
                      <Link
                        className="navbar-item"
                        to={`/${page.node.slug}`}
                        key={page.node.wordpress_id}
                      >
                        {page.node.title}
                      </Link>
                    ))}
                  </div>
                  <div className="navbar-end social-icons">
                    <a
                      className="navbar-item"
                      href={userConfig.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon">
                        <img src={home} alt="Zakir Sajib" />
                      </span>
                    </a>
                    <a
                      className="navbar-item"
                      href={userConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon">
                        <img src={github} alt="Github" />
                      </span>
                    </a>
                    <a
                      className="navbar-item"
                      href={userConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon">
                        <img src={linkedin} alt="LinkedIn" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          );
        }}
      />
    );
  }
}

export default Navbar;
*/