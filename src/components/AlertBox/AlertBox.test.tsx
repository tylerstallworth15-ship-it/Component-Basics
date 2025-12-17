import { render, screen } from '@testing-library/react';
import { describe, it, expect } from "vitest";
import { AlertBox } from './AlertBox';

describe('AlertBox', () => {
    it('renders the message', () => {
        render(<AlertBox type="success" message='Hello World' />);
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });
});