module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'will beach test', // Navigation and Site Title
  titleAlt: 'collages by ben elwyn', // Title for JSONLD
  description: 'collages by ben elwyn',
  url: 'https://collages.elwyn.co', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  ogLanguage: 'en_US', // Facebook Language
  og_share: '/og_share.jpg', // Used for SEO

  // JSONLD / Manifest
  favicon: 'src/images/favicon.png', // Used for manifest favicon generation
  author: 'elwyn.co', // Author for schemaORGJSONL
  twitter: '@elwynco', // Twitter Username
  // facebook: 'gatsby-prismic', // Facebook Site Name
}