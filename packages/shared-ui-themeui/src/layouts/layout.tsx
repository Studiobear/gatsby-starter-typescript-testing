import React, { ReactNode } from 'react'
import loadable from '@loadable/component'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Global style override */
import '../styles/overrides.css'
import '../styles/layout.css'

const LayoutBody = loadable(() => import('../components/layoutBody'), {
  fallback: <div>Loading...</div>,
})

export interface ILayoutProps {
  title: string
  children: ReactNode
  defaultHref?: string | undefined
}

export const Layout = (props: ILayoutProps) => <LayoutBody {...props} />

export default Layout
