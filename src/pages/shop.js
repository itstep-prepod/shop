import React, { useState } from "react";
import { ShopProductsList } from "../components/shopProductsList";
import { ShopSearch } from "../components/shopSearch";
import { data } from "../data/data";

export const Shop = () => {

    const [products, setProducts] = useState([]);

    // setProducts(() => {
        
    // });

    return <>
        <ShopSearch/>
        <ShopProductsList/>
    </>
};