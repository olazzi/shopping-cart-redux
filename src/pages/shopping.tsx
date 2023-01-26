import React, { useEffect } from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
// import CartData from "./data";

import { useSelector, useDispatch } from "react-redux";
import { getCartTotal, clearItems } from "../redux/actions";

import { Button } from "antd";
import ProductList from "../components/productList";
import NavBar from "../NavBar";

const CartContainer = () => {
    const { cart, totalAmount } = useSelector((state:any) => state.cart);
    const dispatch = useDispatch();

    return (
        <><NavBar/>
            <div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                }}>
                    {cart.map((item: JSX.IntrinsicAttributes & { id: number; img: any; title: string; price: number; amount: number; }) => {
                        return <ProductList key={item.id} {...item} />;
                    })}
                </div>


            </div>
        </>
    );
};

export default CartContainer;
