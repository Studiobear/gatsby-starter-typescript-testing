import * as React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'

import { BlogList, BlogItem } from '../blog'

describe('Blog', () => {
  afterEach(cleanup)

  it('renders without crashing', () => {
    const { queryByTestId } = render(<BlogList edges={[]} />)
    expect(queryByTestId('blogList')).toBeVisible
  })

  it('displays placeholder with no posts', () => {
    const { getByText } = render(<BlogList edges={[]} />)
    expect(getByText('No posts found')).toBeInTheDocument()
  })
})
