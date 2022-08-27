import { useState } from "react";
import { Link } from "react-router-dom";
import Tool from "./Tool";
import log from "../scripts/log";

export default function NavBar (props) {
    const [debug, setDebug] = useState(log.DEBUG_MODE)

    function toggleDebugMode () {
        log.DEBUG_MODE = !log.DEBUG_MODE
        setDebug(log.DEBUG_MODE)
        log.info("DEBUG_MODE: " + log.DEBUG_MODE)
    }

    return (
        <nav>
            <ul>
                <li>
                    <Tool url="/login" 
                    name="Login"/>
                </li>
                <li>
                    <Tool action={props.toggleBrowser} 
                    name="Browser"/>
                </li>
                <li>
                    <Tool action={toggleDebugMode}
                    name={"Debug Mode " + debug}/>
                </li>
            </ul>
        </nav>
    )
};
