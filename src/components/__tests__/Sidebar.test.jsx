import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import Sidebar from '../Sidebar'

test('collapsed sidebar shows icons and preserves labels as titles', () => {
  render(<Sidebar collapsed={true} />)
  // Labels should not be visible
  expect(screen.queryByText(/Dashboard/i)).toBeNull()
  // But title tooltip should be present on the dashboard link
  expect(screen.getByTitle(/Dashboard/i)).toBeTruthy()
})