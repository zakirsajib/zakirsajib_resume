const userConfig = require('./config');

module.exports = {
  siteMetadata: {
    title: userConfig.title,
    author: userConfig.author,
    description: userConfig.description,
    siteUrl: userConfig.siteUrl,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://zsresume.netlify.app`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-humans-txt`,
      options: {
        team: [
          {
            Developer: userConfig.author,
            GitHub: `zakirsajib`
          }
        ],
        thanks: [`Gatsby`, `Node`],
        site: {
          'Last update': `2020/05/25`,
          Standards: `JavaScript`,
          Components: `humans-generator`,
          Softwares: `Visual Studio Code`
        },
        note: `Made in Bangladesh.`
      }
    },
    {
      	resolve: `gatsby-plugin-google-fonts`,
      	options: {
	        fonts: [
	           `Pacifico`,
	           `Ubuntu\:400, 500`
	        ],
	        display: 'swap'
	    },
    },
    {
	    resolve: 'gatsby-source-github',
	    options: {
	      headers: {
	        Authorization: `Bearer b2dcd6ffd6cf22dc716620e7ce3887a5cbadbb2a`,
	      },
	      queries: [
	        `{
	          viewer {
			    pinnedItems(first: 50, types: REPOSITORY) {
			      totalCount
			      nodes {
			        ... on Repository {
			          id
			          name
			          languages(first: 10) {
			            nodes {
			              name
			            }
			          }
			          url
			          description
			          homepageUrl
			        }
			      }
			    }
			  }
	        }`,
	      ],
	    },
	  },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://www.google-analytics.com",
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com"
        ]
      }
    },
    'gatsby-plugin-preload-link-crossorigin',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: userConfig.title,
        short_name: userConfig.title,
        start_url: userConfig.siteUrl,
        background_color: '#f9fafc',
        theme_color: userConfig.primaryColor,
        display: 'minimal-ui',
        icon: 'src/images/uploads/brand/logo.svg',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: userConfig.googleAnalyticsID,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: false,
        // Ignore
        ignore: '',
        // Purge only the main css file
        purgeOnly: ['styles/'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
