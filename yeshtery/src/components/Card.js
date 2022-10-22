import { BsStarFill, BsStar } from "react-icons/bs";
import SwibarCards from "./SwibarCards";
import LinksTop from "./LinksTop";
import { useCart } from 'react-use-cart'


function Cards(props) {
    const { addItem } = useCart()
    return (
        <div className="container-fluid linksCard">
            {/*new component */}
            <LinksTop />

            <div className="container Card1">


                <div className="row" key={props.id}>
                    <div className="CardTop col-md-6">
                        <div className="handleImageCard">
                            <img src={props.image} alt="imageCard" />
                        </div>

                        {/* <!-- Swiper --> */}
                        <div className="SwiperCards mt-3">

                            <SwibarCards />

                        </div>
                        {/* <!-- Swiper --> */}
                    </div>
                    {/* <!-- descriptionCard --> */}
                    <div className="col-md-6 descriptionCard">



                        <div className="logoCard">
                            <img src="images/adidas.png" alt="logo" />
                        </div>

                        <div className="titleCard mt-3">
                            {props.title}
                        </div>

                        <div className="category">
                            {props.category}
                        </div>
                        <div>
                            <div className="Rate d-flex ">
                                <span className="starsRate">
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStar />
                                </span>
                                <span className="TotalRate">{props.rate}</span>
                                <span className="Rates">{props.allRate}</span>


                            </div>
                            <div className="price d-flex">
                                <span className="NewPrice">{props.price}<span className="sticer">LE</span></span>
                                <del className="oldPrice ms-3">9,999 <span className="sticer">LE</span></del>
                                <span id="offer" className="ms-3">30% Off</span>

                            </div>
                            <hr />
                        </div>

                        <div className="SizeDescription">
                            <span className="size">Size</span>
                            <div className="d-flex p-3">
                                <span className="sicle m-2">Small</span>
                                <span className="sicle m-2">Medium</span>
                                <span className="sicle m-2">Large</span>
                                <span className="sicle m-2">X Large</span>
                                <span className="sicle m-2">XX Large</span>

                            </div>
                            <hr />
                        </div>

                        <div className="colorShirt">
                            <span className="colorS">Color</span>
                            <div className="colorSicle d-flex">
                                <span className="sicleColor m-2">

                                </span>
                                <span className="sicleColor2 m-2">

                                </span>

                            </div>
                            <hr />
                        </div>

                        <div className="quantity">
                            <div className="quantityAll d-flex justify-content-around">
                                <button className="decrement">-</button>
                                <span>1</span>
                                <button className="decrement">+</button>
                            </div>
                        </div>

                        <div className="buttons d-flex justify-content-around mt-4">
                            <button className="btn ButtAdd" onClick={() => addItem(props.item)}>Add To Cart</button>
                            <button className="btn ButtPick">Pickup From Store</button>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    );
}

export default Cards;