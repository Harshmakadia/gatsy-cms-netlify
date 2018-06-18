module.exports = {
    siteMetadata: {
      title: "Zuru tech"
    },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'markdown-pages',
      },
        options: {
            path: `${__dirname}/job`,
            name: 'markdown-pages',
        },
    },
    `gatsby-transformer-remark`,
  ],
}
