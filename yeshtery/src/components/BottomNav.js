import React from 'react'

const BottomNav = () => {
    return (
        <div className="container-fluid BottNav">
            <div className="text-center">

                <div className="row d-flex justify-content-evenly ">

                    <div className="col-md-1 mt-3"><a href="/">Men</a></div>
                    <div className="col-md-1 mt-3"><a href="/">Women</a></div>
                    <div className="col-md-1 mt-3"><a href="/">Unisex</a></div>
                    <div className="col-md-1 mt-3"><a href="/">Kids</a></div>
                    <div className="col-md-2 mt-3"><a href="/">Best Sellers</a></div>
                    <div className="col-md-2 mt-3"><a href="/">New Arrivals</a></div>
                    <div className="col-md-1 mt-3"><span id="offers"><a href="/">Offers</a></span></div>

                </div>
            </div>
        </div>
    )
}

export default BottomNav;
