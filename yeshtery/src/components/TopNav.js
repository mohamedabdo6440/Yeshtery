
import { BsTextLeft, BsTelephoneInbound, BsCart3, BsGeoAlt } from "react-icons/bs";



const TopNav = () => {
    return (
        <nav className="TopNav navbar-expand-lg navbar navbar-light bg-warning ">
            <div className="container">
                <a className="navbar-brand" href="/"><BsTextLeft />Yeshtery</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav  ms-3">
                        <a className="nav-link active" aria-current="page" href="/">{"<"} Valentine's Day Offers! Buy Tow Cet
                            One Free
                            <a href="/"> Shop Now</a> {">"}</a>
                    </div>
                    <div className="navbar-nav ms-2">
                        <a className="nav-link active" aria-current="page" href="/"><BsTelephoneInbound /> Contact Us</a>
                    </div>
                    <div className="navbar-nav ms-2">
                        <a className="nav-link active" aria-current="page" href="/"><BsCart3 /> Track Order</a>
                    </div>
                    <div className="navbar-nav ms-2">
                        <a className="nav-link active" aria-current="page" href="/"><BsGeoAlt /> Find A Store</a>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default TopNav
