// src/types/index.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  description: string;
  inStock: boolean;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  searchQuery: string;
  sortBy: 'default' | 'price-asc' | 'price-desc' | 'rating';
}

export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}

export interface FormErrors {
  [key: string]: string;
}