export default {
  siteMetadata: {
    title: `Gatsby Starter Ionic`,
    description: `A starter for Gatsby integrated with Ionic + Typescript and TDD-ready`,
    author: `@bearcanrun`,
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-ionic`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#333333`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
          './packages/**/src/**/*.tsx',
          './packages/**/src/**/*.ts',
          './node_modules/gatsby-transformer-sharp/src/*.js',
          './node_modules/gatsby-image/src/*.js',
        ],
      },
    },
    {
      resolve: `@studiobear/gatsby-theme-blog`,
      options: {},
    },
  ],
}
