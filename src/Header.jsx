import React from "react";

const Year = new Date().getFullYear();
const Header = () => {
    return (
        <>
            <header className="text-center text-secondary  p-1 fixed-top font-weight-bolder text-capitalize my-4 margon ">
                <h2 className="font-weight-bolder"> Subham WeatherApp ⛅</h2>
            </header>
        </>
    )
}
export default Header;