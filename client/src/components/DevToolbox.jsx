import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tool from "./Tool";
import OnOff from "./OnOff";
import log from "../scripts/log";
import fetchData from "../scripts/fetchData";
import CLIENT_CONFIG from "../scripts/CLIENT_CONFIG";

export default function DevToolbox (props) {
    const [showDialog, setShowDialog] = useState(false)
    /* these unused variables allow refreshing component */
    const [vars, setVars] = useState({
        debug: log.DEBUG_MODE,
        mock: CLIENT_CONFIG.USE_MOCK_DATA
    })

    function toggleDebugMode () {
        log.DEBUG_MODE = !log.DEBUG_MODE
        setVars({...vars, debug: log.DEBUG_MODE})
        log.info("DEBUG_MODE: " + log.DEBUG_MODE)
    }

    function toggleMockData () {
        CLIENT_CONFIG.USE_MOCK_DATA = !CLIENT_CONFIG.USE_MOCK_DATA
        setVars({...vars, mock: CLIENT_CONFIG.USE_MOCK_DATA})
        log.info("USE_MOCK_DATA: " + CLIENT_CONFIG.USE_MOCK_DATA)
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

    /** ! ONLY THE DIALOG ! see below for full layout */
    const Dialog = showDialog && (
        <div 
        className="dev-screen click-on context dialog bg-strong">
            <h3>Developper Toolbox</h3>
            <ul>
                <li>
                    <Tool action={toggleDebugMode}>
                        debug mode {OnOff(log.DEBUG_MODE, {
                            isSwitch: true,
                            //anormal: true
                        })}
                    </Tool>
                </li>
                <li>
                    <Tool 
                    action={_ => {
                        console.log("----------------", "LOG HISTORY:")
                        let entry
                        for (let i = log.history.length - 1; i > -1; i--) {
                            entry = log.history[i] || {}
                            console.log(entry.tag, entry.data, ...entry.args)
                        }
                        console.log("----------------")
                    }}>
                        log history {">"} console
                    </Tool>
                </li>
                <li>
                    <Tool 
                    action={toggleMockData}>
                        use mock data {OnOff(CLIENT_CONFIG.USE_MOCK_DATA, {
                            isSwitch: true,
                            anormal: true
                        })}
                    </Tool>
                </li>
                <li>
                    <Tool 
                    action={_ => {
                        log.info("%c>reboot", log.style.big)
                        props.dev.setReady(!props.dev.ready)
                    }}>
                        client reboot
                    </Tool>
                </li>
                <li>
                    <Tool 
                    action={_ => props.dev.setDev({
                        ...props.dev, 
                        FORCE_SPLASH_SCREEN: !props.dev.FORCE_SPLASH_SCREEN
                    })}>
                        show splash screen 
                        {OnOff(props.dev.FORCE_SPLASH_SCREEN, {
                            isSwitch: true,
                            // anormal: true
                        })}
                    </Tool>
                </li>

                <hr/> {/* temporary tools */}

                <li>
                    <Tool 
                    action={_ => log.info("-----------------------")}>
                        log separator
                    </Tool>
                </li>
                <li>
                    <Tool 
                    action={_ => fetchData("/api/DEAD_END")}>
                        bad request
                    </Tool>
                </li>
            </ul>
        </div>
    )

    return CLIENT_CONFIG.DEV_MODE && (
        <div className="upfront click-through fullsize">
            <div className="position-absolute bottom right">
                { Dialog }
                <button 
                className="click-on"
                onClick={_ => setShowDialog(!showDialog)}>
                    🛠️
                </button>
            </div>
        </div>
    )
};
