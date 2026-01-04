import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import RecentUpdates from '../RecentUpdates'

test('shows 2026 revision papers update', () => {
  render(<RecentUpdates />)
  const el = screen.getByText(/Added 2026 revision papers/i)
  expect(el).toBeTruthy()
})
