const website = require('./config/website')
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
		title: website.title,
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
		description: website.description,
		banner: website.og_share,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
		og_share: website.og_share,
    author: website.author,
		twitter: website.twitter,
    // facebook: website.facebook,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: website.title,
				short_name: website.title,
				start_url: pathPrefix,
				background_color: `#ffffff`,
				theme_color: `#ffffff`,
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: `standalone`,
				icon: `src/images/icon.png`, // This path is relative to the root of the site.
				include_favicon: true, // Include favicon
			},
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
