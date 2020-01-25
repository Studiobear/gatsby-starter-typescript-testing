import {} from 'jest'
import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import Footer from '../footer'

describe('Footer', () => {
  it('renders without crashing', () => {
    const { getByText, queryAllByTestId } = render(<Footer />)
    expect(getByText(/Built with/)).toBeInTheDocument()
    expect(getByText(/Gatsby/)).toBeInTheDocument()
    expect(queryAllByTestId('contentinfo').length).toBe(1)
  })
})
