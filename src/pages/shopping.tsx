import React from "react";

// import CartData from "./data";

import { useSelector } from "react-redux";


import ProductList from "../components/productList";
import NavBar from "../NavBar";

const CartContainer = () => {
    const { cart } = useSelector((state:any) => state.cart);
   

    return (
        <div style={{backgroundColor: "lightblue"}}><NavBar/>
            <div style={{backgroundColor: "lightblue",
            marginLeft: 180,
            marginRight: 180,
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                }}>
                    {cart.map((item: JSX.IntrinsicAttributes & { id: number; img: any; title: string; price: number; amount: number; }) => {
                        return <ProductList key={item.id} {...item} />;
                    })}
                </div>


            </div>
        </div>
    );
};

export default CartContainer;
