module.exports = () => ({
  pathPrefix,
  mapping: {
    'Mdx.frontmatter.author': `AuthorsYaml`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-image`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography`,
      },
    },
  ],
})
