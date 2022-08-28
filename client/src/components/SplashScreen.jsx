import Wait from "./Wait";


export default function SplashScreen (props) {
    return (
        <Wait hidden={props.hidden} logoSize="18em" />
    )
}