import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { UserProfileCard } from './UserProfileCard';

const user = { id: '1', name: 'Randy Andy', email: 'randy@example.com', role: 'Engineer' };

describe('UserProfileCard', () => {
  it('renders the user name', () => {
    render(<UserProfileCard user={user} />);
    expect(screen.getByText('Randy Andy')).toBeInTheDocument();
  });
});
