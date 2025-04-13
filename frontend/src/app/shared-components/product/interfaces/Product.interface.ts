export interface Product {
    id: number;
    name: string;
    price: number;
    discountPrice: number | null | undefined;
    rating: number;
    image: string;
    category?: string;
    discount?: number;
}