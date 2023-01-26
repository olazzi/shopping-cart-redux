import React from "react";

import {  useDispatch } from "react-redux";
import { addToCart} from "../redux/actions";

import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
const ProductList = ({ id, img, title, price, amount }: { id: number; img: any; title:string; price:number; amount:number; })  => {
    const dispatch = useDispatch();

    return (


    <Card
        hoverable
        style={{width: 240,
            marginBottom: 20,
        }}
        cover={<img src={img} alt={"sad"}/>}
    >
        <Meta title={title} description={price + "$"}/>
        <Button style={{
            backgroundColor:"beige",
        }} onClick={() => dispatch(addToCart(id))}>Add To Cart</Button>
    </Card>
    );
};

export default ProductList;