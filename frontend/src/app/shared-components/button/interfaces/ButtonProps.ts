export interface ButtonProps {
    type: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'text' | 'large';
    text: string;
    onClick?: () => void;
    className?: string;
    size: 'extra-small'| 'extra-small-product' | 'small' | 'medium' | 'large' | 'extra-large';
    margin?: 'zero';
}