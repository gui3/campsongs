import { useEffect, useState } from "react";
import Router from "./Router";
import Wait from "./components/Wait";
import { MetadataContext } from "./components/Contexts";
import log from "./scripts/log"
import DevToolbox from "./components/DevToolbox";


async function wait (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(_ => resolve(true), 100)
  })
}

async function fetchMetadata (setMetadata, log) {
  try {
    const response = await fetch("/api/metadata")
    const data = await response.json()

    if (!data.valid) throw new Error("invalid metadata")
    setMetadata(data.data)
  }
  catch (error) {
    log.error("can't fetch metadata")
    return
  }
  log.debug("metadata fetched")
}

export default function App() {
  const session = {
    browserHidden: true
  }

  const [ready, setReady] = useState(false)
  const [metadata, setMetadata] = useState({waiting: true})

  /* application setup, runs only once */
  useEffect(_ => {
    log.debug("Debug mode is " + log.DEBUG_MODE)

    Promise.all([
      fetchMetadata(setMetadata, log),
      wait(100), // minimum splash screen time
    ])
    .then(results => {
      log.debug("app setup successfull")
      setReady(true)
    })
    .catch(error => {
      console.error(error) // not log.error, if error is with log
      setReady(true)
    })
  }, []) // empty dependance array = only once fired

  return (
    <MetadataContext.Provider value={metadata}>
      <DevToolbox />
      {ready && <Router session={session}/>}
      <Wait hidden={ready} logoSize="18em"/>
    </MetadataContext.Provider>
  )
}
