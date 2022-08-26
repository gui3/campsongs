import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import {routes} from "../Router"
import "./Layout.css"

const Layout = (props) => {
  const session = props.session

  const [hidden, setHidden] = useState(
    props.session && props.session.browserHidden
  )

  function toggleBrowser () {
    console.log(hidden)
    setHidden(!hidden)
  }

  return (
    <div className="container">
      <Header session={session} 
      toggleBrowser={toggleBrowser}/>
      <div className="application">
        <Aside session={session} 
        hidden={hidden}/>
        <main className="page bg-strong">
          <Outlet />
        </main>
      </div>
    </div>
  )
};

export default Layout;