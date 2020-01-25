import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import Footer from '../footer'

describe('Footer', () => {
  it('renders without crashing', () => {
    const { getByText, queryAllByTestId } = render(<Footer />)
    expect(getByText('Gatsby Starter Ionic')).toBeInTheDocument()
    expect(queryAllByTestId('contentinfo').length).toBe(1)
  })
})
