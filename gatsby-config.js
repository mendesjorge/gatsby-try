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
  ],
};
