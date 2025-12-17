import React from "react";
import type { ProductDisplayProps } from "../../types";

export const  ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
    showDescription,
    showStockStatus,
    onAddToCart,
    children,
}) => {
    return (
      <div className="border rounded p-4 flex flex-col gap-3">
        <div className="flex items-start gap-4">
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-24 h-24 rounded object-cover"
              />
            )}
            <div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-800 font-medium">${product.price.toFixed(2)}</p>
            </div>
          </div>

          {showDescription && (
            <p className="text-sm text-gray-700">{product.description}</p>
          )}

          {showStockStatus && (
              <span
                className={`text-sm font-medium ${
                  product.inStock ? 'text-green-700' : 'text-red-700'
                }`}
              >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            )}

            {onAddToCart && (
              <button
                type="button"
                onClick={() => onAddToCart(product.id)}
                className="self-start px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400"
                disabled={!product.inStock}
              >
                Add to Cart
              </button>
            )}
            {children && <div className="text-sm text-gray-500">{children}</div>}
          </div>
        );
      };