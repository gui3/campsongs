import { useEffect } from "react";
import CLIENT_CONFIG from "../scripts/CLIENT_CONFIG";
import OnOff from "../components/OnOff";
import Tool from "../components/Tool"

const meta = import.meta

/*
DEFAULT_SWITCH_CONTENT[0] = <span class="switch">ON</span>
DEFAULT_SWITCH_CONTENT[1] = <span class="switch">OFF</span>
*/

export default function DevTest () {
    useEffect(_ => {

    })

    
    function test1 () {
            
        console.log("meta", meta)
        console.log("config", CLIENT_CONFIG)
    }


    return (
        <>
            <Tool action={test1}>Test 1</Tool>



            true: {OnOff(true, "on-off", true)}<br/>
            false: {OnOff(false)}<br/>
            undefined: {OnOff()}<br/>

            <OnOff value={true} anormal>hello world</OnOff>
        </>
    )
}