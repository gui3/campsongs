import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import fetchData from "../scripts/fetchData";
import log from "../scripts/log"


export default function SongBrowser (props) {
    // in progress
    const [research, setResearch] = useState(props.search || "")
    const [status, setStatus] = useState({text: research})
    const [songs, setSongs] = useState([])

    useEffect(_ => {
        log.debug("searching : " + research)

        const base = "https://base.url"
        const url = new URL("/api/songs/search", base)
        const path = url.pathname
        const params = url.searchParams
        params.append("text", research)

        fetchData(path + "?" + params)
        .then(data => data.type === "SONGS" && setSongs(data.data))
        .catch(error => log.error(error))
    }, [research])

    function search () {
        setResearch(status.text)
    }

    function onChange (event) {
        setStatus({
            typing: true,
            lastHit: new Date(),
            text: event.target.value
        })
    }

    return (
        <div className="responsive-padding">
            <div>
                <input type="text" placeholder="> search songs"
                className=""
                value={status.text} 
                onChange={onChange}
                onKeyUp={e => (e.key === 'Enter' || e.keyCode === 13) && search()}
                />
                <button onClick={search}>search</button>
            </div>
            <ol>
                {songs && songs.map && songs.map((song, ix) => {
                    return (
                    <li key={ix} className="card">
                        <Link to={"/song/" + song.songId}>
                            <h4>
                                {song.songName} - {song.author}
                            </h4>
                        </Link>
                    </li>
                )})}
            </ol>
        </div>
    )
}