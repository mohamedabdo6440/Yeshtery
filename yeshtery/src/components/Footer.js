import React from 'react'
import img from './DinamecImage/cach.jpg'
import img1 from './DinamecImage/Visa-Log.png'
import img2 from './DinamecImage/master.png'
import face from './DinamecImage/Facebook.png'
import insta from './DinamecImage/insta.webp'
import twit from './DinamecImage/twit.png'
import linkd from './DinamecImage/linkd.png'
const Footer = () => {
    return (


        <div className="footer">
            <div className="container ">
                <div className="topFooter">
                    <div className="row mb-3 ">
                        <div className="col-md-6 mt-4">
                            <h1>Yeshtery</h1>
                        </div>
                        <div className="col-md-6 mt-2">
                            <input type="search" className="mt-4 SearchFooter" placeholder="Enter Your Mail" />
                        </div>
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-md-5 p-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat tempora sit et laboriosam,
                        incidunt neque voluptas est quos excepturi magni enim, animi commodi quibusdam odio recusand.
                        <br />
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, officia, ad ea expedita dolore qui
                        consequuntur sapiente quam illo, earum consequatur officiis quis a libero aliquam labore velit
                    </div>
                    <div className="col-md-3">
                        <div className="Links ">
                            <span>About</span>
                            <span>Contact Us</span>
                            <span>Track Order</span>
                            <span>Terms $ Conditions</span>
                            <span>Privacy Policy</span>
                            <span>Sell With Us</span>
                            <span>Shipping And Returns</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="Links">
                            <span> <span className='socialimages'>
                                <img src={face} alt="" style={{ height: "20%", width: "20%" }} />
                            </span>/YESHTERY</span>

                            <span> <span className='socialimages me-3'>
                                <img src={insta} alt="" style={{ height: "10%", width: "10%" }} className="ms-3" />
                            </span>/YESHTERY</span>

                            <span> <span className='socialimages me-3'>
                                <img src={twit} alt="" style={{ height: "10%", width: "10%" }} className="ms-3" />
                            </span>/YESHTERY</span>
                            <span> <span className='socialimages me-3'>
                                <img src={linkd} alt="" style={{ height: "10%", width: "10%" }} className="ms-3" />
                            </span>/YESHTERY</span>


                        </div>
                    </div>

                </div>
                <hr />
                <div className="buttFooter text-center">
                    <div className="row">
                        <div className="col-md-4">
                            <p> &copf; 2021 yeshtery. all rights reserved.</p>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <div className="visaLodo me-2">
                                <img src={img} alt="" style={{ height: "70%", marginTop: "7px" }} />
                            </div>
                            <div className="visaLodo me-2">
                                <img src={img1} alt="" />
                            </div>
                            <div className="visaLodo me-2">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='d-flex text-center'>
                                <p className='ms-5'> Powered By </p>
                                <h5 className='ms-2'>nasnav</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
