import styles from '../styles/styles.module.css';
import { ReactElement, useContext, useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { createContext } from 'react';
import { ProductCardProps, productContextProps } from '../interfaces/interfaces';


export const ProductContext = createContext({} as productContextProps );
const { Provider } = ProductContext;



export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = useProducts();

  return (
    <Provider value={{
        counter, increaseBy, product
    }}>
        <div className={styles.productCard}>
            { children }
            
            {/* <ProductImage img={ product.img }/>

            <ProductTitle title={ product.title }/>

            <ProductButtons increaseBy={ increaseBy } counter={ counter } /> */}
        </div>
    </Provider>
  )
}
