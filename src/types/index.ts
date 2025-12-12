import type { ReactNode } from 'react';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertBoxProps{
    type: AlertType;
    message:string;
    onClose?: () => void;
    children?: ReactNode;
}

export interface user{
    id:string;
    name:string;
    email:string;
    role:string;
    avatarUrl?: string;
}

export interface UserProfileCardProps{
    user: user;
    showEmail?: boolean;
    showRole?: boolean;
    onEdit?: (userId: string) => void;
    children?: ReactNode;
}

export interface Product{
    id: string;
    name: string;
    price: number;
    description: string;

    imageUrl?: string;

    inStock: boolean;
}

export interface ProductDisplayProps{
    product: Product;
    showDecription?: boolean;
    showStockStatus?: boolean;
    onAddToCart?: (productId: string) => void
    children?: ReactNode;
}


