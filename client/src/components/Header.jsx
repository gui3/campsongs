import AppLogo from "./AppLogo";
import NavBar from "./NavBar";
import "./Header.css"
import { Link } from "react-router-dom";
import { MetadataContext } from "./Contexts";

export default function Header (props) {

    return (
        <header className="Header bg-smooth">
            <Link to="/">
                <span className="sitename">
                    <MetadataContext.Consumer>
                        {metadata => metadata.APP_NAME}
                    </MetadataContext.Consumer>
                </span>
            </Link>
            <div className="center-items">
                <div>
                    <Link to="/fireplace">
                        <AppLogo size="2em" />
                    </Link>
                </div>
            </div>
            <NavBar togglePanel={props.togglePanel} />
        </header>
    )
}