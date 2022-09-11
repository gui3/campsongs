import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Panel from "../components/Panel";
import Watermark from "../components/Watermark"
import "./Layout.css"

const Layout = (props) => {
  const session = props.session

  const [hiddenPanel, setHiddenPanel] = useState(
    props.session && props.session.browserHidden
  )

  function togglePanel () {
    setHiddenPanel(!hiddenPanel)
  }

  return (
    <div className="app container bg-strong">
      <Header session={session} 
      togglePanel={togglePanel}/>

      <div className="application">
        <Panel session={session} 
        hidden={hiddenPanel}/>
        <div className="view">
          <Watermark/>
          <main className="page position-relative top bottom left right">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
};

export default Layout;