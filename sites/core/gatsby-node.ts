/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Making typescript --isolatedModules happy...
interface NodeProps {
  page: any
  actions: any
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
