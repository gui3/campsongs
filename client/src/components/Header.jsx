import LogoFire from "./LogoFire";
import NavBar from "./NavBar";
import "./Header.css"
import { Link } from "react-router-dom";

export default function Header (props) {

    return (
        <header className="Header bg-smooth">
            <Link to="/">
                <span className="sitename">Fireplace</span>
            </Link>
            <div className="center-items">
                <div>
                    <Link to="/fireplace">
                        <LogoFire size="2em" />
                    </Link>
                </div>
            </div>
            <NavBar toggleBrowser={props.toggleBrowser} />
        </header>
    )
}