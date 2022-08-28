import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import CLIENT_CONFIG from "../CLIENT_CONFIG"
import log from "../scripts/log"


export default function SongBrowser (props) {
    // in progress
    const [research, setResearch] = useState(props.search || "")
    const [status, setStatus] = useState({text: research})
    const [songs, setSongs] = useState([])

    useEffect(_ => {
        log.debug("searching /api/songs/" + research)
        fetch("/api/songs/" + research)
        .then(response => response.json())
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
        <div>
            <h3>Song Browser</h3>
            <div>
                <input type="text" placeholder="seach songs" 
                value={status.text} 
                onChange={onChange}
                />
                <button onClick={search}>search</button>
            </div>
            <ol>
                {songs && songs.map && songs.map(song => {
                    return (
                    <li>
                        <Link to={"/song/" + song.songName}>
                            <h4>{song.songName}</h4>
                            <p>{song.author}</p>
                        </Link>
                    </li>
                )})}
            </ol>
        </div>
    )
}