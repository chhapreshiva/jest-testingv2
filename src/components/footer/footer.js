import React from "react";

const Footer = () => {
    return(
        <footer role='footer'>
            <div className="row m-0 px-5 bg-dark text-white py-5">
                <div className="col-4">Contact us</div>
                <div className="col-4">About us</div>
                <div className="col-4">T&C policy</div>
            </div>
            <div className="row m-0 bg-secondary text-center">
                <p className="m-0 text-center text-white">@copyright all rights reserved. 2023</p>
            </div>
        </footer>
    )
}

export default Footer ;