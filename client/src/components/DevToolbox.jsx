import { useState } from "react";
import { Link } from "react-router-dom";
import Tool from "./Tool";
import log from "../scripts/log";
import CLIENT_CONFIG from "../CLIENT_CONFIG";
import { useEffect } from "react";
import fetchData from "../scripts/fetchData";

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
        if (CLIENT_CONFIG.DEV_MODE && !props.dev.ready) {
            log.info(`
%cDEV MODE ON

%cSome developper forgot to set
%cDEV_MODE: false
%cin CLIENT_CONFIG.js

if you see this, please report
by clicking "report" in the dev toolbox
(button bottom right)
`,
                log.style.big,
                log.style.text,
                log.style.code,
                log.style.text
            )
        }
    }, [props.dev.ready])

    const Screen = (
        <div 
        className="dev-screen click-on context-dialog bg-strong">
            <h3>Developper Toolbox</h3>
            <ul>
                <li>
                    <Tool action={toggleDebugMode}
                    name={"debug mode : " + debug}/>
                </li>
                <li>
                    <Tool 
                    action={_ => {
                        log.info("%c>reboot", log.style.big)
                        props.dev.setReady(!props.dev.ready)
                    }}
                    name={"client reboot"}/>
                </li>
                <li>
                    <Tool 
                    action={_ => props.dev.setDev({
                        ...props.dev, 
                        FORCE_SPLASH_SCREEN: !props.dev.FORCE_SPLASH_SCREEN
                    })}
                    name={"show splash screen : " + props.dev.FORCE_SPLASH_SCREEN}/>
                </li>
                <li>
                    <Tool 
                    action={_ => console.log("LOG HISTORY:", log.history)}
                    name={"log history > console"}/>
                </li>

                <hr/> {/* temporary tools */}

                <li>
                    <Tool 
                    action={_ => log.debug("hello in debug mode")}
                    name={"test log"}/>
                </li>
                <li>
                    <Tool 
                    action={_ => fetchData("/api/DEAD_END")}
                    name={"bad request"}/>
                </li>
            </ul>
        </div>
    )

    return CLIENT_CONFIG.DEV_MODE && (
        <div className="upfront click-through fullsize">
            <div className="position-absolute bottom right">
                { devscreen && Screen}
                <button 
                className="click-on"
                onClick={_ => setDevscreen(!devscreen)}>
                    🛠️
                </button>
            </div>
        </div>
    )
};
