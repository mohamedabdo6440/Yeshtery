import React from 'react';
import { Badge } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { BsMinecartLoaded, BsFillPersonFill, BsHeart } from 'react-icons/bs';
import CartGet from './CartGet';

const MedNav = ({ dataGet, Remove }) => {


    const {
        totalUniqueItems,
    } = useCart();



    return (
        <div className="MedNav container text-center">
            <div className="row">
                <div className="col-md-4 m-auto">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="col-md-4 text-center">
                    <div className="handleLogo m-auto">
                        <img src="../images/adidas.png" alt="" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="Carts row">





                        <div className="col-md-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            <BsMinecartLoaded />
                            <Badge bg="danger" style={{ fontSize: "10px", marginBottom: "5px" }}>

                                {
                                    totalUniqueItems
                                }

                            </Badge>
                            Cart
                        </div>

                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">

                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <CartGet Remove={Remove} dataCart={dataGet} />
                            </div>
                        </div>






                        <div style={{ cursor: "pointer" }} className="col-md-4"><BsHeart /> Wishlist</div>
                        <div style={{ cursor: "pointer" }} className="col-md-4"><BsFillPersonFill /> Login</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedNav;
