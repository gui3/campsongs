/**
 * this component is to use for switches
 * or to display values that can be anormal
 */

/* constants */
export const NO_ANORMAL = new Date()
export const DEFAULT_SWITCH_CONTENT = [
    "ON",
    "OFF"
]

export default function OnOff (value, props = {}) {
    value = !value
    ? value
    : (value.value || value.children || value)

    props = {
        isSwitch: false,
        className: "on-off",
        ...props
    }

    let {anormal, className, content, wrap, isSwitch, onClick} 
    = props

    onClick = onClick instanceof Function ? onClick : null

    const isAnormal = anormal instanceof Function
    ? anormal(value)
    : (value === anormal && anormal !== NO_ANORMAL)

    className = !className ? "" : className.valueOf()

    /* for big red anormal values */
    if (isAnormal) {
        className += " anormal"
    }

    /* for switch button value styling */
    let text = "" + value

    if (isSwitch) {
        content = content instanceof Array ? content : DEFAULT_SWITCH_CONTENT
        wrap = true // for styling

        switch (value) {
            case true:
                text = content[0]
                className += " on"
                break
            case false:
            case null:
            case undefined:
                text = content[1]
                className += " off"
                break
        }
    }

    if (wrap) return (
        <span className={className} onClick={onClick}><span>{text}</span></span>
    )
    else return (
        <span className={className} onClick={onClick}>{text}</span>
    )
}
