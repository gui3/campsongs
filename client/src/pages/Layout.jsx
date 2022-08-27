import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Panel from "../components/Panel";
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
    <div className="container">
      <Header session={session} 
      togglePanel={togglePanel}/>

      <div className="application">
        <Panel session={session} 
        hidden={hiddenPanel}/>

        <main className="page bg-strong">
          <Outlet />
        </main>
      </div>
    </div>
  )
};

export default Layout;