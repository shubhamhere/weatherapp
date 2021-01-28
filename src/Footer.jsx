import React from "react";

const Year = new Date().getFullYear();
const Footer = () => {
    return (
        <>
            <footer className="text-center fixed-bottom bg-white mx-1 margon ">
                <p><strong> ShubhamWeather</strong>|All Right reserved ©️{Year}.</p>
            </footer>
        </>
    )
}
export default Footer;