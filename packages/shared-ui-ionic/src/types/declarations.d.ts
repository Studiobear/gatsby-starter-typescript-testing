declare module 'typography-theme-st-annes' {
  export function overrideThemeStyles(): IDefaultStyles

  export interface IDefaultStyles {
    'a.gatsby-resp-image-link': {
      boxShadow: string
    }
  }

  export const googleFonts: any
}
