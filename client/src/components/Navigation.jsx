import { Link } from "react-router-dom";

import { routes } from "../Router"

export default function Navigation () {
    return (
        <nav>
            <ul>
                {routes.map(route => !route.secret && <li>
                    <Link to={route.path}>{route.name}</Link>
                </li>
                )}
            </ul>
        </nav>
    )
};
