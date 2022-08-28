import { useEffect } from "react";
import { useState } from "react";
import AppLogo from "./AppLogo";

export default function Wait (props) {
    const [hidden, setHidden] = useState(false)
    const [status, setStatus] = useState("VISIBLE")
    // const [classes, setClasses] = useState(
    //     "opaque center-items center-text bg-smooth"
    // )

    //let classes = "opaque center-items center-text bg-smooth"
    //let hidden = status === "HIDDEN"

    useEffect(_ => {
        switch (props.hidden) {
            case true:
                if (!hidden) setStatus("FADING")
                break
            case false:
                setStatus("VISIBLE")
                break
        }
    }, [props.hidden])

    useEffect(_ => {
        setHidden(status === "HIDDEN")
        /*
        switch (status) {
            case "FADING":
                classes += " fade out"
                break
            case "HIDDEN":
                hidden = true
                break
        }*/
    }, [status])

    let classes = "position-absolute fullsize center-items center-text bg-smooth"
    + (status === "FADING" ? " fade out" : " opaque")

/*
    useEffect(_ => {
        const fading = props.hidden && status === "VISIBLE"
        //if (fading) setClasses(classes + " fade out")
        if (fading) setStatus("FADING")
    }, [status, props.hidden])

    useEffect(_ => {
        console.log("status", status)
        switch (status) {
            case "HIDDEN":
                setHidden(true)
                break
            case "FADING":
                setClasses(classes + " fade out")
                break
        }
    }, [status])
*/
    console.log({props: props.hidden, hidden, classes, status})

    if (!hidden) return (
        <div className={classes}
        onTransitionEnd={_ => setStatus("HIDDEN")}>
            <div>
                <AppLogo dynamic={props.dynamic} 
                size={props.logoSize} />
                <p className="big">
                    {props.text || "Wait by the fire"}
                    <span className="dynamic dots">...</span>
                </p>
                {props.children}
            </div>
        </div>
    )
}