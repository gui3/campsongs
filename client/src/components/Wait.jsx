import { useEffect } from "react";
import { useState } from "react";
import AppLogo from "./AppLogo";

export default function Wait (props) {
    const [hidden, setHidden] = useState(false)
    const [classes, setClasses] = useState(
        "opaque center-items center-text bg-smooth"
    )

    useEffect(_ => {
        const fading = !hidden && props.hidden
        if (fading) setClasses(classes + " fade out")
    }, [hidden, props.hidden])

    if (!hidden) return (
        <div className={classes}
        onTransitionEnd={_ => setHidden(true)}>
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