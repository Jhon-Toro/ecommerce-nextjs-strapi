import { RatingProps } from "@/app/shared-components/rating/interfaces/Rating.interface";

jest.mock('@/app/shared-components/rating/Rating', () => ({
  __esModule: true,
  default: ({ rating }: RatingProps) => <div data-testid="rating">Rating: {rating}</div>,
}));