import { useState } from "react";
import Router from "./Router";
import Wait from "./components/Wait";

export default function App() {
  const session = {
    browserHidden: true
  }


  const [ready, setReady] = useState(false)
  setTimeout(_ => setReady(true), 0)

  console.log(ready)
  return <>
    {ready && <Router session={session} />}
    <Wait hidden={ready} logoSize="18em"/>
  </>
}
