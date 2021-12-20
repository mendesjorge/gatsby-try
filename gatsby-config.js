const path = require('path')

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "solution",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "3105184031",
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": path.resolve(__dirname, 'src/components'),
          "@styles": path.resolve(__dirname, 'src/styles')
        },
        extensions: ['js']
      }
    }
  ],
};
