import { useState } from "react";
import Router from "./Router";
import Wait from "./components/Wait";

export default function App() {
  const session = {
    browserHidden: true
  }

  const [ready, setReady] = useState(false)
  setTimeout(_ => setReady(true), 500)

  if (ready) return <Router session={session} />
  else return <Wait dynamic logoSize="18em"/>
}
