import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { IonText } from '@ionic/react'

interface IPost {
  title: string
  date: string
  body: string
}

export const Post = ({ title, date, body }: IPost) => (
  <>
    <IonText color="primary">
      <h1>{title}</h1>
    </IonText>
    <IonText color="primary">
      <p>{date}</p>
    </IonText>
    <MDXRenderer>{body}</MDXRenderer>
  </>
)

export default Post
