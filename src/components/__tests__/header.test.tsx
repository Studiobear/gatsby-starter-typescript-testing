import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import Header from '../header'

describe('Header', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Header siteTitle="Gatsby Starter Ionic" />)
    expect(getByText('Gatsby Starter Ionic')).toBeInTheDocument()
  })
  it('render two nav buttons', () => {
    const { getByText } = render(<Header siteTitle="Gatsby Starter Ionic" />)
    expect(queryAllByTestId('todo-item').length).toBe(2)
  })
})
