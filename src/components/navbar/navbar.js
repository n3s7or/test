import React, {useState} from "react";
import { BiMenu } from "react-icons/bi";
import "./navbar.scss";

export default function Navbar({user}) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <ul>
                <li></li>
                <li>Domicilios Test</li>
                <li className="dropdown">
                    <a href="#" onClick={(e)=>{
                        e.preventDefault();
                        setShowMenu(!showMenu);
                    }}><BiMenu /></a>
                    <div className={showMenu ? "dropdown-content dropdown-show" : "dropdown-content"}>
                        <p>Hello {user}!</p>
                        <a href="#" className="button">Publicar</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}