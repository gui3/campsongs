import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Fireplace from "./pages/Fireplace";
import Song from "./pages/Song";
import Page404 from "./pages/404";
import DevPage from "./pages/DevPage";
import CLIENT_CONFIG from "./scripts/CLIENT_CONFIG";

export default function Router(props) {
  const session = props.session

  const [DevRoute, setDevRoute] = useState(null)

  /* render DEV route only on DEV_MODE */
  useEffect(_ => {
    if (CLIENT_CONFIG.DEV_MODE) {
      setDevRoute(<Route path="DEV_TEST" element={<DevPage session={session}/>} />)
    }
  }, [CLIENT_CONFIG.DEV_MODE])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout session={session}/>}>
          <Route index element={<Home session={session}/>} />
          <Route path="song/:id" element={<Song session={session}/>} />
          <Route path="about" element={<About session={session}/>} />
          <Route path="contact" element={<Contact session={session}/>} />
          <Route path="fireplace" element={<Fireplace session={session}/>} />
          { DevRoute }
          <Route path="*" element={<Page404 session={session}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export const routes = [
  {
    name: "Home",
    index: true,
    path: "/",
    //element: <Home />
  }, {
    name: "About",
    path: "/about",
    //element: <About />
  }, {
    name: "Contact",
    path: "/contact",
    //element: <Contact />
  }, {
    name: "?",
    path: "fireplace",
    secret: true
  }
]