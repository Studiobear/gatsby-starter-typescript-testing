import path from 'path'

module.exports = ({
  contentImages = 'content/images',
  contentBlog = 'content/blog',
  pathPrefix = '',
  sources: { local, contentful } = { local: true, contentful: false },
}) => ({
  pathPrefix,
  mapping: {
    'Mdx.frontmatter.author': `AuthorsYaml`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentImages,
        name: contentImages,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentBlog,
        name: contentBlog,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
      },
    },
  ],
})
