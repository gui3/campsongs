import { useState } from "react";
import { Link } from "react-router-dom";
import Tool from "./Tool";
import log from "../scripts/log";
import CLIENT_CONFIG from "../CLIENT_CONFIG";
import { useEffect } from "react";

export default function DevToolbox (props) {
    const [devscreen, setDevscreen] = useState(false)
    const [debug, setDebug] = useState(log.DEBUG_MODE)

    function toggleDebugMode () {
        log.DEBUG_MODE = !log.DEBUG_MODE
        setDebug(log.DEBUG_MODE)
        log.info("DEBUG_MODE: " + log.DEBUG_MODE)
    }

    /* DEV MODE console message */
    useEffect(_ => {
        if (CLIENT_CONFIG.DEV_MODE) {
            log.info(`
%cDEV MODE ON

%cSome developper forgot to set
%cDEV_MODE: false
%cin CLIENT_CONFIG.js

if you see this, please report
by clicking "report" in the dev toolbox
(button bottom right)
`,
                "font-size: 2em; font-weight: bold",
                "font-size: 1.2em;",
                "background: #000; color: #fff; font-family: monospace;",
                "font-size: 1.2em;"
            )
        }
    }, [])

    return CLIENT_CONFIG.DEV_MODE && (
        <div className="click-through fullsize">
            <div className="position-absolute bottom right">
                { devscreen && (
                    <div 
                    className="click-on context-dialog bg-strong dev-screen">
                        <h3>Developper Toolbox</h3>
                        <ul>
                            <li>
                                <Tool action={toggleDebugMode}
                                name={"debug mode : " + debug}/>
                            </li>
                            <li>
                                <Tool 
                                action={_ => log.debug("hello in debug mode")}
                                name={"test debug"}/>
                            </li>
                            <li>
                                <Tool 
                                action={_ => console.log("LOG HISTORY:", log.history)}
                                name={"log history"}/>
                            </li>
                        </ul>
                    </div>
                )}
                <button 
                className="click-on"
                onClick={_ => setDevscreen(!devscreen)}>
                    🛠️
                </button>
            </div>
        </div>
    )
};
