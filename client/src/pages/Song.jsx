import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


export default function Song (props) {
    const {id} = useParams()

    const [songId, setSongId] = useState(id)


    return (
        <>
            <h1>Song</h1>
            <p>id: {id}</p>
            <p>songId: {songId}</p>
        </>
    )
}