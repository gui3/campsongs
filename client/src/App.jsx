import { useEffect, useState } from "react";
import Router from "./Router";
import Wait from "./components/Wait";
import { MetadataContext } from "./components/Contexts";
import DevToolbox from "./components/DevToolbox";
import log from "./scripts/log"
import fetchData from "./scripts/fetchData";
import wait from "./scripts/wait"
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const session = {
    browserHidden: true
  }

  const [ready, setReady] = useState(false)
  const [metadata, setMetadata] = useState({})
  const [dev, setDev] = useState({
    ready, setReady,
    FORCE_SPLASH_SCREEN: false
  })

  /** dev tools updates */
  useEffect(_ => setDev({...dev, ready, setReady, setDev}), [ready])

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
          log.error(new Error("invalid metadata"))
          log.debug("invalid data", json)
          return 
          //throw new Error("could not fetch metadata, see json above")
        }
        setMetadata(json.data)
      }

      Promise.all([
        fetchMetadata(setMetadata, log),
        wait(50), // minimum splash screen time
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

      {ready && <Router session={session}/>}

      <SplashScreen hidden={!dev.FORCE_SPLASH_SCREEN && ready} />

      <DevToolbox dev={dev}/>

    </MetadataContext.Provider>
  )
}
