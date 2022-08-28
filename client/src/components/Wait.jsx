import { useEffect } from "react";
import { useState } from "react";
import AppLogo from "./AppLogo";

export default function Wait (props) {
    const [hidden, setHidden] = useState(false)
    const [status, setStatus] = useState("VISIBLE")

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
    }, [status])

    const classes = "upfront position-absolute fullsize center-items center-text bg-smooth"
    + (status === "FADING" ? " fade out" : " opaque")

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