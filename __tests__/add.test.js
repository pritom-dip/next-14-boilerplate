import { render, screen } from '@testing-library/react'
import HomePage from '../src/app/page'

test('Render Successfully', () => {
  render(<HomePage />)
  const text = screen.getByText(/Hello/i)
  expect(text).toBeInTheDocument()
})
