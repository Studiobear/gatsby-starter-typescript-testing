import * as React from 'react'
import * as Gatsby from 'gatsby'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'

import { Layout } from '../layout'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'Gatsby Starter Ionic - Layout',
    },
  },
}))

describe('Layout', () => {
  afterEach(cleanup)

  it('renders without crashing', () => {
    const { getByText } = render(
      <Layout>
        <h1>Renders</h1>
      </Layout>,
    )
    expect(getByText('Renders')).toBeInTheDocument()
  })

  it('passes data and children props', () => {
    const { getByText, queryAllByTestId } = render(
      <Layout>
        <h1>Passes props</h1>
      </Layout>,
    )
    expect(queryAllByTestId('banner').length).toBe(1)
    expect(queryAllByTestId('main').length).toBe(1)
    expect(queryAllByTestId('contentinfo').length).toBe(1)
    expect(getByText('Gatsby Starter Ionic - Layout')).toBeInTheDocument()
    expect(getByText('Passes props')).toBeInTheDocument()
  })
})
