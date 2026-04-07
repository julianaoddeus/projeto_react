import { memo, useCallback } from "react";
import { Link } from "react-router";
import { ShoppingCart, Plus } from "lucide-react";

import { formatCurrency } from "../lib/utils";
import { HOST_API } from "../services/api";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

function ProductCardComponent({ product }: ProductCardProps) {



  const handleAddToCart = useCallback(() => {
    
  }, []);

  return (
    <div className="bg-gray-700 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
      <Link
        to={`/products/${product.documentId}`}
        className="block relative aspect-square overflow-hidden"
      >
        <img
          src={
            product.image?.url
              ? `${HOST_API}${product.image.url}`
              : "https://via.placeholder.com/300x300?text=Sem+Imagem"
          }
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "NOT FOUND";
          }}
        />
      </Link>

      <div className="p-4">
        <Link to={`/products/${product.documentId}`}>
          <h3 className="text-lg font-semibold text-pink-700 hover:text-primary transition-colors line-clamp-1">
            {product.title}
          </h3>
        </Link>
        <p className="text-secondary text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-primary">
            {formatCurrency(product.price)}
          </span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-1 px-3 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
            aria-label={`Adicionar ${product.title} ao carrinho`}
          >
            <ShoppingCart className="w-4 h-4" />
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export const ProductCard = memo(
  ProductCardComponent,
  (prevProps, nextProps) => {
    return (
      prevProps.product.id === nextProps.product.id &&
      prevProps.product.price === nextProps.product.price
    );
  },
);

export default ProductCard;
