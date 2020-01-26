import * as React from 'react'

interface PropTypes {
  children: string
}

const Button = ({ children }: PropTypes) => (
  <button className="btn btn-primary">{children}</button>
)

export { Button }
