// src/types/product.ts
export interface Product {
  id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  description: string;
  mainImage: string; // Main image for the product
  additionalImages: string[]; // Array of additional images (thumbnails)
  colors: { name: string; hex: string }[];
  sizes: string[];
  reviews: Review[];
}

export interface Review {
  author: string;
  rating: number;
  comment: string;
  date: string;
}