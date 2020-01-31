export default {
  siteMetadata: {
    title: `Gatsby Starter Ionic`,
    description: `A starter for Gatsby integrated with Ionic + Typescript and TDD-ready`,
    author: `@bearcanrun`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content/blog`,
        name: `content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content/blog/gatsby-ionic-starter`,
        name: `content/blog/gatsby-ionic-starter`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content/assets`,
        name: `content/assets`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-ionic`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#333333`,
        display: `standalone`,
        icon: `content/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        // Integrate react-axe in production. This defaults to false.
        showInProduction: false,
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
      },
    },
    {
      resolve: 'gatsby-plugin-codegen',
      options: {
        localSchemaFile: './schema.json',
        includes: [
          './src/**/*.tsx',
          './src/**/*.ts',
          './node_modules/gatsby-transformer-sharp/src/*.js',
          './node_modules/gatsby-image/src/*.js',
        ],
      },
    },
  ],
}
