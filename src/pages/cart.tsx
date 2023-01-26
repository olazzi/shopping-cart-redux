import logo from "./logo.svg";

import NavBar from "../NavBar";
import CartContainer from "../CartContainer";
import {useDispatch, useSelector } from "react-redux";

function Cart() {
    const { totalCount } = useSelector((state:any) => state.cart);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <NavBar />
            <CartContainer />
        </div>
    );
}

export default Cart;
