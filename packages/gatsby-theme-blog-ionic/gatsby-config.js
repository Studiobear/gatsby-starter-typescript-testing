const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)
  const { mdx = true } = themeOptions
  return {
    siteMetadata: {
      title: `Ionic Blog Title`,
      author: `Blog Author`,
      description: `About the blog`,
      social: [
        {
          name: `Twitter`,
          url: `https://twitter.com/gatsbyjs`,
        },
        {
          name: `GitHub`,
          url: `https://github.com/gatsbyjs`,
        },
      ],
    },
    plugins: [
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // should this be configurable by the end-user?
                maxWidth: 1380,
                linkImagesToOriginal: false,
              },
            },
            { resolve: `gatsby-remark-copy-linked-files` },
            { resolve: `gatsby-remark-smartypants` },
          ],
          remarkPlugins: [require(`remark-slug`)],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content/blog`,
          name: options.contentPath || `content/blog`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.assetPath || `content/assets`,
          name: options.assetPath || `content/assets`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ].filter(Boolean),
  }
}
