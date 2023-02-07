import React from "react";
import cartIcon from '../../assets/cart_icon.png';
import styles from './index.module.css';

export const ShopProduct = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Name</h1>
            <p className={styles.category}>Category</p>
            <div className={styles.productImage}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg'/>
            </div>
            <p className={styles.description}>Description</p>
            <div className={styles.priceWrapper}>
                <p className={styles.price}>Price</p>
                <button className={styles.addToCartButton}>
                    <img src={cartIcon} alt='cart' />
                </button>
            </div>
        </div>
    );
};