/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

let options = {
  basePath: '/',
  themeTemplate: require.resolve(`./src/templates/theme`)
}

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions

  // Create theme page
  createPage({
    path: themeOptions.basePath || options.basePath,
    component: options.themeTemplate,
  })
}