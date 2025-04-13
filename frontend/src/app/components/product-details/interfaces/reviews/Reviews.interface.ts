export interface Review {
    id: string;
    author: string;
    rating: number;
    text: string;
    date: string;
    verified: boolean;
}

export interface ReviewsProps {
reviews: Review[];
}   