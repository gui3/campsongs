

export default function (props) {
    return (
        <div>
            {props.log.message}
            <button onClick={props.log.remove}>X</button>
        </div>
    )
}