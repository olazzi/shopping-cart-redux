import React from 'react';
import { Card } from 'antd';
//import { addToCart } from '../state/action-creators';
const { Meta } = Card;

const Products = ({id,name, price, quantity} : {id:any, name:any,price:any, quantity:any}) => {


    return (
        <Card
            hoverable
            style={{width: 240,
            marginBottom: 20,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
        >
            <Meta title={name} description={price}/>
            {/*<Button onClick={() =>addToCart(id,name,price,quantity) }>Add To Cart</Button>*/}
        </Card>
    );
}

export default Products;