import React from "react";
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarLink,
    MDBNavbarBrand,
    MDBBadge,
    MDBBtn,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { displayItem } from "./redux/actions";
import cartData from "./data";


const NavBar = () => {
    const { totalCount } = useSelector((state:any) => state.cart);
    const dispatch = useDispatch();
    return (
        <div>
            <MDBNavbar expand="lg" dark bgColor="primary">
                <MDBContainer>
                    <MDBNavbarBrand
                        style={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{backgroundColor: "pink",
                            padding: 10,
                            borderRadius: 30,

                        }}>
                            <a style={{color: "blue"}} href="/">REDUX SHOPPING</a>
                        </div>
                    </MDBNavbarBrand>

                    <MDBBtn
                        className="text-dark"
                        color="light"
                        style={{ width: "120px" }}
                        onClick={() => dispatch(displayItem(cartData))}
                    >
                        Get Items
                    </MDBBtn>
                        <div style={{backgroundColor: "white",
                        padding: 10,
                            borderRadius: 30,

                        }}>
                        <a style={{color: "black"}} href="/about">GO CART ({totalCount} products)</a>
                        </div>

                </MDBContainer>
            </MDBNavbar>
        </div>
    );
};

export default NavBar;
