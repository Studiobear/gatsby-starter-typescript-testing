# gatsby-theme-typescript-storybook

This is a gatsby theme which acts as a base for themes requiring typescript and storybook. Feel free to fork this repository and make changes which suit your needs. Alternatively, you can pull this directly into a yarn workspace and use it as a local package without having to publish to NPM. How you use this is entirely up to your needs (you could even remove the theme elements and just use this as a starter with ts and storybook). This repo is minimal and unopinionated so does not direct you on how to build your site other than setting up Typescript and Storybook.

## Usage

```
cd my-yarn-workspace-project   //for yarn workspace only
gatsby new gatsby-theme-my-theme https://github.com/danspratling/gatsby-theme-typescript-storybook
```

In your site

On the command line run

```
yarn add gatsby-theme-my-theme
//Add @* at the end if you are using yarn workspaces and want to run the theme locally
```

gatsby-config.js

```
module.exports = {
  __experimentalThemes: [`gatsby-theme-my-theme`]
}
```

You can also add this directly using
`yarn add gatsby-theme-typescript-storybook`
but this theme is extremely minimal, acting more like a theme starter so forking and adding to it is recommended

After that, you can just use this like any other theme.
