import * as React from 'react'
import * as Gatsby from 'gatsby'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'

import { Layout } from '../index'

describe('Layout', () => {
  const siteTitle = 'Gatsby Starter Ionic - Layout'

  afterEach(cleanup)

  it('Shows loading element', () => {
    const { getByText } = render(
      <Layout title={siteTitle}>
        <h1>Renders</h1>
      </Layout>,
    )
    expect(getByText('Loading...')).toBeInTheDocument()
  })
})
