/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const LoadablePlugin = require('@loadable/webpack-plugin')

interface NodeProps {
  page: any
  actions: any
}

interface WebpackProps {
  stage: any
  loaders: any
  actions: any
}

exports.onCreateWebpackConfig = ({ actions }: WebpackProps) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()],
  })
}

export const onCreatePage = ({ page, actions }: NodeProps) => {
  if (process.env.NODE_ENV !== `production` && page.path === `/404/`) {
    const { createPage } = actions
    // Make the 404 page match everything client side.
    // This will be used as fallback if more specific pages are not found
    page.matchPath = `/*`
    createPage(page)
  }
}
