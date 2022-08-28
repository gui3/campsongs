import { useEffect, useState } from "react";
import Router from "./Router";
import Wait from "./components/Wait";
import { MetadataContext } from "./components/Contexts";
import DevToolbox from "./components/DevToolbox";
import log from "./scripts/log"
import fetchData from "./scripts/fetchData";
import wait from "./scripts/wait"

export default function App() {
  const session = {
    browserHidden: true
  }

  const [ready, setReady] = useState(false)
  const [metadata, setMetadata] = useState()
  const [dev, setDev] = useState({ready, setReady})

  /** dev tools updates */
  useEffect(_ => setDev({...dev, ready, setReady}), [ready])

  /**
   * APP SETUP
   * runs only once per site load
   * (unless debug action)
   */
  useEffect(_ => {
    if (!ready) {
      log.debug("Debug mode is " + log.DEBUG_MODE)

      async function fetchMetadata () {
        const json = await fetchData("/api/metadata")
        if (json.type !== "METADATA") {
          log.info(json)
          throw new Error("could not fetch metadata, see json above")
        }
        setMetadata(json.data)
        log.debug("metadata fetched")
      }

      Promise.all([
        fetchMetadata(setMetadata, log),
        wait(100), // minimum splash screen time
      ])
      .then(results => {
        log.debug("app setup successfull")
        setReady(true)
      })
      .catch(error => {
        log.error(error)
        setReady(true)
      })
    }
  }, [ready]) // empty dependance array = only once fired

  return (
    <MetadataContext.Provider value={metadata}>
      <DevToolbox dev={dev}/>
      {ready && <Router session={session}/>}
      <Wait hidden={ready || dev.forceSplashScreen} 
      logoSize="18em"/>
    </MetadataContext.Provider>
  )
}
