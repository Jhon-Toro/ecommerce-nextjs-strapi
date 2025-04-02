export interface ButtonProps {
    type: 'primary' | 'secondary' | 'outline' | 'text' | 'large';
    text: string;
    onClick?: () => void;
    className?: string;
    size: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
}