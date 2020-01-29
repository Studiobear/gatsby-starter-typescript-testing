import React, { ReactNode } from 'react'
import { IonApp, IonPage, IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react'
// import classNames from 'classnames'

import { Header, Footer } from '../components'

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

export interface LayoutProps {
  title: string
  children: ReactNode
  defaultHref: string
}

export const Layout = (props: LayoutProps) => (
  <IonApp>
    <IonPage>
      <Header siteTitle={props.title} defaultHref={props.defaultHref} />
      <IonContent className={'ion-padding'}>{props.children}</IonContent>
      <Footer />
    </IonPage>
  </IonApp>
)

export default Layout
