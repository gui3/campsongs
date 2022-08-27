import { useEffect, useState } from "react";
import Router from "./Router";
import Wait from "./components/Wait";
import { MetadataContext } from "./components/Contexts";
import log from "./scripts/log"


async function wait (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(_ => resolve(true), 100)
  })
}

async function fetchMetadata (setMetadata, log) {
  try {
    const response = await fetch("/api/metadata")
    const data = await response.json()

    if (!data.IS_METADATA) throw new Error("invalid metadata")
    setMetadata(data)
  }
  catch (error) {
    log.error("bug fetching app metadada, expect other bugs")
    return
  }
  log.debug("success in fetching metadata")
}

export default function App() {
  const session = {
    browserHidden: true
  }

  const [ready, setReady] = useState(false)
  const [metadata, setMetadata] = useState({waiting: true})
  const [userlogs, setUserlogs] = useState([])

  /* application setup, runs only once */
  useEffect(_ => {
    log.debug("Debug mode is " + log.DEBUG_MODE)
    Promise.all([
      fetchMetadata(setMetadata, log),
      wait(100), // minimum splash screen time
      // (async _ => {throw new Error("TEST ERROR - to be removed")})()
    ])
    .then(results => {
      log.info("app setup successfull")
      setReady(true)
    })
    .catch(error => {
      console.error(error)
      setReady(true)
    })
  }, []) // empty dependance array = only once fired

  /* userlogs update */
  useEffect(_ => {
    userlogs.forEach((log, index) => {
      log.remove = () => {
        // will update userlogs without the removed index
        setUserlogs(
          userlogs.slice(0, index)
          .concat(userlogs.slice(index + 1))
        )
      }
    })
  }, [userlogs])

  return (
    <MetadataContext.Provider value={metadata}>
      {ready && <Router session={session} userlogs={userlogs}/>}
      <Wait hidden={ready} logoSize="18em"/>
    </MetadataContext.Provider>
  )
}
