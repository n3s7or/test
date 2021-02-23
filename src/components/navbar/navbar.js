import React from "react";
import { BiMenu } from "react-icons/bi";
import "./navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li></li>
                <li>Domicilios Test</li>
                <li>
                    <BiMenu />
                </li>
            </ul>
        </nav>
    )
}