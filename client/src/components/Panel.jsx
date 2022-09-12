import { useState } from "react"
import SongBrowser from "./SongBrowser"


export default function Panel (props) {
    const session = props.session

    return (
        <aside className={`Aside panel bg-strong ${props.hidden ? "hidden" : ""}`}>
            <SongBrowser />
            
        </aside>
    )
}