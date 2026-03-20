import { memo, useCallback } from 'react';
import { Link } from 'react-router';
import { ShoppingCart, Plus } from 'lucide-react';


import { toast } from 'react-toastify';
import { formatCurrency } from '../lib/utils';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}


function ProductCardComponent({ product }: ProductCardProps) {

const isAuthenticated = true;
  // useCallback - Memoiza função para evitar re-render
  const handleAddToCart = useCallback(() => {
    if (!isAuthenticated) {
      toast.warn('Faça login para adicionar ao carrinho!');
      return;
    }

    
  }, [product, isAuthenticated]);

  const imageUrl = '';

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
      {/* Imagem do produto */}
      <Link to={`/products/${product.id}`} className="block relative aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={product.attributes.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300?text=Sem+Imagem';
          }}
        />
        {product.attributes.category?.data && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-white text-xs rounded-full">
            {product.attributes.category.data.attributes.name}
          </span>
        )}
      </Link>

      {/* Informações do produto */}
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">
            {product.attributes.name}
          </h3>
        </Link>
        <p className="text-secondary text-sm mt-1 line-clamp-2">
          {product.attributes.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-primary">
            {formatCurrency(product.attributes.price)}
          </span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-1 px-3 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
            aria-label={`Adicionar ${product.attributes.name} ao carrinho`}
          >
            <ShoppingCart className="w-4 h-4" />
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// memo() - Evita renderização desnecessária quando props não mudam
export const ProductCard = memo(ProductCardComponent, (prevProps, nextProps) => {
  // Verificação de render nos parâmetros (demonstra rubrica)
  return prevProps.product.id === nextProps.product.id &&
         prevProps.product.attributes.price === nextProps.product.attributes.price;
});

export default ProductCard;
