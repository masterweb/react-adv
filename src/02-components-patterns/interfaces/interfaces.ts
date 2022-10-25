import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;    
    children?: ReactElement | ReactElement[]
}

interface Product {
    id: string;
    title: string;
    img?: string
}

export interface productContextProps {
    counter: number;
    increaseBy: ( valule: number ) => void;
    product: Product
}