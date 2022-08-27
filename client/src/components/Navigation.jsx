import { Link } from "react-router-dom";

import { routes } from "../Router"

export default function Navigation () {
    return (
        <nav className="center-text">
            <ul>
                {routes.map((route, ix) => !route.secret && <li key={ix}>
                    <Link to={route.path}>{route.name}</Link>
                </li>
                )}
            </ul>
        </nav>
    )
};
