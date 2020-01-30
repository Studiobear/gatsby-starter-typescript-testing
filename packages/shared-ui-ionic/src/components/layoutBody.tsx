import React, { ReactNode } from 'react'
import { IonApp, IonPage, IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react'
// import classNames from 'classnames'

import { Header, Footer } from '../components'
import { ILayoutProps } from '../layouts'

export const LayoutBody = (props: ILayoutProps) => (
  <IonApp>
    <IonPage>
      <Header siteTitle={props.title} defaultHref={props.defaultHref} />
      <IonContent className={'ion-padding'}>{props.children}</IonContent>
      <Footer />
    </IonPage>
  </IonApp>
)

export default LayoutBody
