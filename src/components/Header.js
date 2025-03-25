import React from "react";
import logo from "../logo.svg";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <button className="login-btn">Đăng nhập</button>
        </header>
    );
}

export default Header;
