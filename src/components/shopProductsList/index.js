import React from "react";
import { ShopProduct } from "../shopProduct";
import styles from './index.module.css';


export const ShopProductsList = () => {
    return (
        <div className={styles.productList}>
            <ShopProduct/>
        </div>
    );
};