import { useEffect, useState } from "react";
import Router from "./Router";
import Wait from "./components/Wait";
import { MetadataContext } from "./components/Contexts";
import DevToolbox from "./components/DevToolbox";
import log from "./scripts/log"
import fetchData from "./scripts/fetchData";
import wait from "./scripts/wait"
import SplashScreen from "./components/SplashScreen";
import CLIENT_CONFIG from "./scripts/CLIENT_CONFIG";

export default function App() {
  const session = {
    browserHidden: true
  }

  const [ready, setReady] = useState(false)
  const [metadata, setMetadata] = useState({
    APP_NAME: CLIENT_CONFIG.DEFAULT_APP_NAME,
    APP_VERSION: "bug.0.0"
  })
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
        if (json.type !== "CONFIG") {
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
        log.debug("app setup finished", results)
      })
      .catch(error => {
        log.error(error)
      })
      .finally(_ => {
        setReady(true)
      })
    }
  }, [ready]) // empty dependance array = only once fired

  return (
    <MetadataContext.Provider value={metadata}>

      <Router ready={ready} session={session}/>

      <SplashScreen hidden={!dev.FORCE_SPLASH_SCREEN && ready} />

      <DevToolbox devMode={CLIENT_CONFIG.DEV_MODE} dev={dev}/>

    </MetadataContext.Provider>
  )
}
