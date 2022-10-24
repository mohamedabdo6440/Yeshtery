import React from 'react'
import { Badge } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { BsMinecartLoaded, BsFillPersonFill, BsHeart } from 'react-icons/bs';
import CartGet from './CartGet';



const ResponNav = () => {

    const {
        totalUniqueItems,
    } = useCart();
    return (
        <div>
            <nav className="ResponNav navbar navbar-expand-lg bg-light">
                <div className="container">
                    <div>
                        <h1><a className="navbar-brand" href="/">Yeshtery</a></h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">

                        <form className="d-flex " role="search">
                            <input className="form-control me-2 my-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <ul className="navbar-nav my-2">
                            <div className="handleLogo m-auto">
                                <img src="../images/adidas.png" alt="" />
                            </div>
                        </ul>

                        <ul className="navbar-nav">
                            <button className="btn btn-dark bg-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                <BsMinecartLoaded /><Badge bg="danger" style={{ fontSize: "10px", marginBottom: "5px" }}>{totalUniqueItems}</Badge>Cart

                            </button>

                            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="staticBackdropLabel">Your Carts</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <div>
                                        <CartGet />
                                    </div>
                                </div>
                            </div>
                            <li className="nav-item mt-2">
                                <div style={{ cursor: "pointer" }} className="col-md-4"><BsHeart /> Wishlist</div>
                            </li>
                            <li className="nav-item mt-2">
                                <div style={{ cursor: "pointer" }} className="col-md-4"><BsFillPersonFill /> Login</div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default ResponNav;
