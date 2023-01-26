import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "./redux/actions";
import { Button } from "antd";

const CartItems = ({ id, img, title, price, amount }: { id: number; img: any; title:string; price:number; amount:number; })  => {
    const dispatch = useDispatch();

    return (
        <div style={{ width: "70vw", maxWidth: "90vw", margin: "0px auto" }}>
            <div className="row" style={{ marginTop: "20px", marginLeft: "120px" }}>
                <div className="col-sm-2">
                    <img
                        src={img}
                        className="img-fluid"
                        alt={title}
                        style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
                    />
                </div>
                <div className="col-sm-2">
                    <h5>{title}</h5>
                    <h5 style={{ color: "#617d98" }}>${price}</h5>
                    <Button
                        color="danger"
                        onClick={() => dispatch(remove(id))}>remove item</Button>
                </div>
                <div className="col-sm-8">
                    <Button
                        color="danger"
                        onClick={() => dispatch(increase(id))}>+</Button>
                    <p style={{ marginTop: "10px" }}>{amount}</p>
                    <Button
                        color="danger"
                        onClick={() => dispatch(decrease(id))}>-</Button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
