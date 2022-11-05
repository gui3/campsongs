import { useState, useEffect } from "react";
import Tool from "./Tool";


export default function ThemeSwitch (props) {
    const [theme, setTheme] = useState("light")

    useEffect(_ => {
        document.body.classList.forEach(classname => {
            if (classname.startsWith("theme-")) {
                document.body.classList.remove(classname)
            }
        })
        document.body.classList.add("theme-" + theme)
    }, [theme])

    return (
        <>
            <Tool action={_ => setTheme("light")} name="🔆"/>
            <Tool action={_ => setTheme("dark")} name="🌒"/>
            <Tool action={_ => setTheme("camper")} name="⛺"/>
        </>
    )
}