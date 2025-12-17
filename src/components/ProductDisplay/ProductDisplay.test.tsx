import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProductDisplay } from "./ProductDisplay";

const product = {
    id: 'p1',
    name: 'Sandwhich',
    price: 7.99,
    description: 'So Yummy!',
    inStock: true,
};

describe('ProductDisplay', () => {
    it('renders product name and price', () => {
        render(<ProductDisplay product={product} />);
        expect(screen.getByText('Sandwhich')).toBeInTheDocument();
        expect(screen.getByText('$7.99')).toBeInTheDocument();
    });
  });