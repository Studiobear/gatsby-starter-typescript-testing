module.exports = {
  client: {
    addTypename: false,
    excludes: [],
    includes: [
      './packages/**/src/**/*.tsx',
      './packages/**/src/**/*.ts',
      './node_modules/gatsby-transformer-sharp/src/*.js',
      './node_modules/gatsby-image/src/*.js',
    ],
    service: {
      name: 'gatsbySchema',
      localSchemaFile: './schema.json',
    },
    tagName: 'graphql',
  },
}
