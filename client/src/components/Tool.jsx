import { Link } from "react-router-dom"

export default function Tool (props) {

    const button = (
        <button className="tool" 
        onClick={props.action}
        >
            {props.name}
        </button>
    )

    if (props.url) {
        return <Link to={props.url}>{button}</Link>
    }
    else {
        return button
    }
}