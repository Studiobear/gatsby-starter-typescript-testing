import React from 'react'

import { IonFooter, IonToolbar, IonTitle } from '@ionic/react'

const Footer = () => (
  <IonFooter data-testid="contentinfo">
    <IonToolbar>
      <IonTitle size="small">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </IonTitle>
    </IonToolbar>
  </IonFooter>
)

export default Footer
