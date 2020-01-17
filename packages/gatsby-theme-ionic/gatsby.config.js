module.exports = ({
  contentAuthors = 'content/authors',
  contentPosts = 'content/posts',
  pathPrefix = '',
  sources: { local, contentful } = { local: true, contentful: false },
}) => ({
  pathPrefix,
  mapping: {
    'Mdx.frontmatter.author': `AuthorsYaml`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-image`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPosts,
        name: contentPosts,
      },
    },
  ],
})
