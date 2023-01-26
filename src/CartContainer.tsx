import React, { useEffect } from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
// import CartData from "./data";
import CartItems from "./CartItems";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal, clearItems } from "./redux/actions";
import { Button } from "antd";

const CartContainer = () => {
    const { cart, totalAmount } = useSelector((state:any) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    if (cart.length === 0) {
        return (
            <h3 className="fw-bold" style={{ marginTop: "20px" }}>
                Your Shopping{" "}
                <span>
          <MDBIcon fas icon="shopping-bag" />
        </span>{" "}
                is Empty
            </h3>
        );
    }
    return (
        <div>
            <h2 className="fw-bold">Your Shopping Cart</h2>
            {cart.map((item: JSX.IntrinsicAttributes & { id: number; img: any; title: string; price: number; amount: number; }) => {
                return <CartItems key={item.id} {...item} />;
            })}
            <footer>
                <hr />
                <div>
                    <h4
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            marginRight: "60px",
                        }}
                    >
                        Total <span>${totalAmount}</span>
                    </h4>
                </div>
                <Button
                    color="danger"
                    onClick={() => dispatch(clearItems())}>Clear Cart</Button>
            </footer>
        </div>
    );
};

export default CartContainer;
