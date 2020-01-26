import Typography from 'typography'
import stAnnesTheme, { IDefaultStyles } from 'typography-theme-st-annes'

stAnnesTheme.overrideThemeStyles = (): IDefaultStyles => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

delete (stAnnesTheme as any).googleFonts // eslint-disable-line

export const typography = new Typography(stAnnesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
