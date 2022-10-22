import React from 'react'
import { Badge } from 'react-bootstrap'
import { useCart } from 'react-use-cart'

const CartGet = ({ x }) => {

    const {
        // totalUniqueItems,
        // totalItems,
        // cartTotal,
        // updateItemQuantity,
        // emptyCart,
        isEmpty,
        items,
        removeItem,
    } = useCart();
    if (isEmpty) return <h1>Not Saved Cards..</h1>

    return (
        <>



            {
                items.map((item) => {
                    return (<>

                        <div className="titleCart">
                            <h1 className="title ">My Cart</h1>
                            <h3 className="subTitle ">Cart Summary</h3>
                        </div>
                        <div className="container mt-2" key={item.id}>
                            <div className="card m-auto" style={{ width: "17rem", height: "22rem" }}>
                                <img src={item.image} className="card-img-top" alt="..." style={{ height: "50%" }} />
                                <div className="card-body">
                                    <h6 style={{ fontWeight: "bold" }} className="card-title">{item.title}</h6>
                                    <p className="card-text">quantity: {item.quantity}</p>
                                    <div className="d-flex justify-content-around mb-3">
                                        <h5 className="card-text " style={{ color: "#6823e3" }}>{item.price} <Badge className='bg-dark '>LE</Badge> </h5>
                                        <button className="btn Remove" onClick={() => removeItem(item.id)}>Remove</button>
                                    </div>
                                    <button className="btn delCart">Review</button>
                                    <button className="btn revCart me-2">Comlete Checkout</button>

                                </div>
                            </div>
                        </div>
                    </>)
                })
            }

        </>
    )
}

export default CartGet
