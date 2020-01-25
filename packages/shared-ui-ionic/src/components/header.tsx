import React from 'react'
import { navigate } from 'gatsby'

import { IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonIcon } from '@ionic/react'
import { home } from 'ionicons/icons'

export interface Props {
  siteTitle: string
}

const Header = ({ siteTitle = '' }: Props) => (
  <IonHeader data-testid="banner">
    <a className="skip-link" href="#content">
      Skip to main content
    </a>
    <IonToolbar role="navigation">
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonTitle>{siteTitle}</IonTitle>
      <IonButtons slot="end">
        <IonButton color="primary" onClick={() => navigate('/')} data-testid="header-nav">
          <IonIcon icon={home} />
          Home
        </IonButton>
        <IonButton color="primary" onClick={() => navigate('/blog')} data-testid="header-nav">
          Blog
        </IonButton>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
)

export default Header
