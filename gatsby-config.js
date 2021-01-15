const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gatsby DEV_SSR unstyled bug',
  },
  flags: {
    FAST_REFRESH: true,
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'allPages',
        path: path.join(__dirname, 'src', 'pages'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          allPages: require.resolve(path.resolve(__dirname, 'src', 'templates', 'Page.jsx')),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
      },
    },
  ],
}
