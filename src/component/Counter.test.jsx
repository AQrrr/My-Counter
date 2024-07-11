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
});