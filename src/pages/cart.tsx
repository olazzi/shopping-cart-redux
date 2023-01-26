

import NavBar from "../NavBar";
import CartContainer from "../CartContainer";
import {useDispatch, useSelector } from "react-redux";

function Cart() {

    
    return (
        <div className="App">
            <NavBar />
            <CartContainer />
        </div>
    );
}

export default Cart;
