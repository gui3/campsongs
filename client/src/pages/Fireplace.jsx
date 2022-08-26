import { Link } from "react-router-dom";
import Wait from "../components/Wait";
import Navigation from "../components/Navigation"


export default function Fireplace () {
    return <Wait dynamic logoSize="15em"
    text="Aren't we cool here ?">
        <Navigation />
    </Wait>
}