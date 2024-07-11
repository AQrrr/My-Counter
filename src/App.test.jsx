import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Counter', () => {
  render(<App />);
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});