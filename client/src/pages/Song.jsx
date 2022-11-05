import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import fetchData from "../scripts/fetchData"
import log from "../scripts/log"


export default function Song (props) {
    const {id} = useParams()

    const [songId, setSongId] = useState(null)
    const [songData, setSongData] = useState({})

    // reload at each request
    if (id !== songId) setSongId(id)

    useEffect(_ => {
        fetchData("/api/song/" + id)
        .then(json => {
             log.debug("json response", json)
            if (json.type === "SONG") {
                 log.debug("set data", json)
                setSongData(json.data)
            }
        })
    }, [songId])

    useEffect(_ => {
        
    }, [songData])

    console.log(songData)
    return (
        <>
            <h1>{songData.songName}</h1>
            <p>id: {id}</p>
            <p>songId: {songId}</p>
            <pre>{songData && songData.text}</pre>
        </>
    )
}