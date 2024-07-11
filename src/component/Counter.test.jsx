import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('renders the counter', () => {
    render(<Counter />);
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });

  it('increments the counter', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });

  it('decrements the counter', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByText('Counter: -1')).toBeInTheDocument();
  });
  // Test for error scenario when trying to decrement below -1
  it('should log an error when trying to decrement below -1', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    render(<Counter />);

    // Click the decrement button 2 times
    for (let i = 0; i <= 2; i++) {
      fireEvent.click(screen.getByText('Decrement'));
    }

    expect(consoleSpy).toHaveBeenCalledWith(
      'Error decrementing counter:',
      expect.any(Error)
    );
    expect(consoleSpy.mock.calls[0][1].message).toBe(
      'Cannot decrement below -1'
    );

    consoleSpy.mockRestore();
  });
});
