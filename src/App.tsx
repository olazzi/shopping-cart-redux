import logo from "./logo.svg";
import NavBar from "./NavBar";
import CartContainer from "./CartContainer";
import {useDispatch, useSelector } from "react-redux";
import Shopping from "./pages/shopping"
import Cart from "./pages/cart"
import { Routes ,Route,BrowserRouter } from 'react-router-dom';


function App() {

    return (
        <div>
            <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Shopping/>} />
                    <Route path="/about" element={<Cart />}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
