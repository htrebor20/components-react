import { describe, it, expect } from 'vitest' 
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Hello } from './Hello' 

describe('Hello component', () => {
  it('renders with the correct name', () => {
    render(<Hello name="Vite" />)
    expect(screen.getByText('Hello, Vite!')).toBeInTheDocument()
  })
})
