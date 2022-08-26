import { useState } from "react";
import LogoFire from "./LogoFire";

export default function Wait (props) {
    const [hidden, setHidden] = useState(false)
    
    const fading = !hidden && props.hidden
    let className = "opaque center-items center-text bg-smooth"
    if (fading) className += " fade out"

    if (!hidden) return (
        <div className={className}
        onTransitionEnd={_ => setHidden(true)}>
            <div>
                <LogoFire dynamic={props.dynamic} 
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