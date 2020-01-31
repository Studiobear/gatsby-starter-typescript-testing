import * as React from 'react'
import * as Gatsby from 'gatsby'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'

import { LayoutBody } from '../index'

describe('Layout', () => {
  const siteTitle = 'Gatsby Starter Ionic - Layout'

  afterEach(cleanup)

  it('renders without crashing', () => {
    const { getByText } = render(
      <LayoutBody title={siteTitle}>
        <h1>Renders</h1>
      </LayoutBody>,
    )
    expect(getByText('Renders')).toBeInTheDocument()
  })

  it('passes data and children props', () => {
    const { getByText, queryAllByTestId } = render(
      <LayoutBody title={siteTitle}>
        <h1>Passes props</h1>
      </LayoutBody>,
    )
    expect(queryAllByTestId('banner').length).toBe(1)
    expect(getByText('Gatsby Starter Ionic - Layout')).toBeInTheDocument()
    expect(getByText('Passes props')).toBeInTheDocument()
  })

  it('passes defaultHref to header', () => {
    const { queryAllByTestId } = render(
      <LayoutBody title={siteTitle} defaultHref="/blog">
        <h1>Passes defaultHref</h1>
      </LayoutBody>,
    )
    const testNav = queryAllByTestId('header-nav-back')
    expect(testNav.length).toBe(1)
    expect(testNav[0]).toMatchObject(expect.objectContaining({ defaultHref: '/blog' }))
  })
})
