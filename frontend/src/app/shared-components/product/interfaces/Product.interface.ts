export interface Product {
    id: number;
    name: string;
    price: number;
    discountPrice: number | null;
    rating: number;
    image: string;
    category: string;
    discount?: number;
}