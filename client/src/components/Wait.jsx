import LogoFire from "./LogoFire";

export default function Wait (props) {
    return (
        <div className="opaque fullsize center-items center-text">
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