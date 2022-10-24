import React from 'react'

const BottomNav = () => {
    return (



        <nav className="BottNav navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
                <span></span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-4">
                            <a className="nav-link active" aria-current="page" href="/">Men</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link active" aria-current="page" href="/">Women</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link active" aria-current="page" href="/">Unisex</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link active" aria-current="page" href="/">Kids</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link active" aria-current="page" href="/">Best Sellers</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link active" aria-current="page" href="/">New Arrivals</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link active" style={{ color: "red" }} aria-current="page" href="/">Offers</a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default BottomNav;
