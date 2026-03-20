// Strapi response types
export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

// Auth types
export interface User {
  id: number;
  username: string;
  email: string;
}

export interface AuthResponse {
  jwt: string;
  user: User;
}

export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

// Product types
export interface ProductAttributes {
  name: string;
  description: string;
  price: number;
  image?: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  category?: {
    data: StrapiData<CategoryAttributes>;
  };
  createdAt: string;
  updatedAt: string;
}

export type Product = StrapiData<ProductAttributes>

// Category types
export interface CategoryAttributes {
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

// export interface Category extends StrapiData<CategoryAttributes> {}

// // Cart types
// export interface CartItemAttributes {
//   quantity: number;
//   product: {
//     data: Product;
//   };
//   createdAt: string;
//   updatedAt: string;
// }

// export interface CartItem extends StrapiData<CartItemAttributes> {}

// export interface CartAttributes {
//   total: number;
//   cart_items: {
//     data: CartItem[];
//   };
//   user: {
//     data: StrapiData<{ username: string; email: string }>;
//   };
//   createdAt: string;
//   updatedAt: string;
// }

// export interface Cart extends StrapiData<CartAttributes> {}
