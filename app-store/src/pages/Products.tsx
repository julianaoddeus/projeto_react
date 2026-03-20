import { useState } from "react";

import { Search, Filter, X } from "lucide-react";

export function Products() {
 
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

 
  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
    setShowFilters(false);
  };


  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
  };

  //   if (productsError) {
  //     return (
  //       <div className="container mx-auto px-4 py-12 text-center">
  //         <p className="text-destructive">Erro ao carregar produtos. Tente novamente.</p>
  //       </div>
  //     );
  //   }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Produtos</h1>
        <p className="text-secondary">Explore nossa seleção de produtos</p>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar produtos..."
            className="w-full pl-10 pr-4 py-3 bg-transparent border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
        </div>

        {/* Category Filter Button */}
        <div className="relative">
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className={`flex items-center gap-2 px-4 py-3 border rounded-lg transition-colors ${
              selectedCategory
                ? "border-primary bg-blue-50 text-primary"
                : "border-muted hover:border-primary"
            }`}
          >
            <Filter className="w-5 h-5" />
            {/* <span>
              {selectedCategory
                ? categories?.find((c) => c.id === selectedCategory)?.attributes.name
                : 'Categorias'}
            </span> */}
          </button>

          {/* Dropdown */}
          {showFilters && (
            <div className="absolute top-full mt-2 right-0 bg-white border border-muted rounded-lg shadow-lg z-10 min-w-[200px]">
              <button
                onClick={() => handleCategorySelect(null)}
                className={`w-full px-4 py-2 text-left hover:bg-muted transition-colors ${
                  !selectedCategory ? "text-primary font-medium" : ""
                }`}
              >
                Todas as categorias
              </button>
              {/* {categories?.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`w-full px-4 py-2 text-left hover:bg-muted transition-colors ${
                    selectedCategory === category.id ? 'text-primary font-medium' : ''
                  }`}
                >
                  {category.attributes.name}
                </button>
              ))} */}
            </div>
          )}
        </div>

        {/* Clear Filters */}
        {(searchTerm || selectedCategory) && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 px-4 py-3 text-destructive hover:bg-red-50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
            Limpar filtros
          </button>
        )}
      </div>

      {/* Results count */}
      {/* <p className="text-secondary mb-4">
        {filteredProducts.length} produto(s) encontrado(s)
      </p> */}

      {/* Products Grid */}
      <div className="text-center py-12">
        <p className="text-secondary text-lg">Nenhum produto encontrado.</p>
        <button
          onClick={clearFilters}
          className="mt-4 text-primary hover:underline"
        >
          Limpar filtros e ver todos
        </button>
      </div>
      {/* {productsLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
              <div className="aspect-square bg-muted" />
              <div className="p-4 space-y-3">
                <div className="h-5 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-6 bg-muted rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-secondary text-lg">Nenhum produto encontrado.</p>
          <button
            onClick={clearFilters}
            className="mt-4 text-primary hover:underline"
          >
            Limpar filtros e ver todos
          </button>
        </div>
      )} */}
    </div>
  );
}

export default Products;
