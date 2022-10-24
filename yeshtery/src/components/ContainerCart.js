import React from 'react'
import CartGet from './CartGet';
const ContainerCart = () => {
    return (
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">

                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <CartGet />
            </div>
        </div>
    )
}

export default ContainerCart;
