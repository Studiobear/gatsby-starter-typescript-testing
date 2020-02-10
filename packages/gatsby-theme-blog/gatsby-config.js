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
            `gatsby-remark-prismjs`,
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-smartypants`,
          ],
          remarkPlugins: [require(`remark-slug`)],
        },
      },
      {
        resolve: `gatsby-plugin-feed-mdx`,
        options: {
          query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
          feeds: [
            {
              serialize: ({ query: { site, allMdx } }) => {
                return allMdx.edges.map(edge => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.excerpt,
                    date: edge.node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + '/blog' + edge.node.fields.slug,
                    guid: site.siteMetadata.siteUrl + '/blog' + edge.node.fields.slug,
                    custom_elements: [{ 'content:encoded': edge.node.html }],
                  })
                })
              },
              query: `
                {
                  allMdx(
                    sort: { order: DESC, fields: [frontmatter___date] },
                  ) {
                    edges {
                      node {
                        excerpt
                        html
                        fields { slug }
                        frontmatter {
                          title
                          date
                        }
                      }
                    }
                  }
                }
              `,
              output: '/rss.xml',
              title: "Your Site's RSS Feed",
              // optional configuration to insert feed reference in pages:
              // if `string` is used, it will be used to create RegExp and then test if pathname of
              // current page satisfied this regular expression;
              // if not provided or `undefined`, all pages will have feed reference inserted
              match: '^/blog/',
            },
          ],
        },
      },
    ].filter(Boolean),
  }
}
