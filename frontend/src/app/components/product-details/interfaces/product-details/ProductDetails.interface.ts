export interface Product {
  id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  price: number;
  discountPrice: number;
  discount: number;
  description: string;
  mainImage: string;
  additionalImages: string[];
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