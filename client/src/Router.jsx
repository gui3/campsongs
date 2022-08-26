import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Fireplace from "./pages/Fireplace";
import Page404 from "./pages/404";

export default function Router(props) {
  const session = props.session

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout session={session}/>}>
          <Route index element={<Home session={session}/>} />
          <Route path="about" element={<About session={session}/>} />
          <Route path="contact" element={<Contact session={session}/>} />
          <Route path="fireplace" element={<Fireplace session={session}/>} />
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
    path: "about",
    //element: <About />
  }, {
    name: "Contact",
    path: "contact",
    //element: <Contact />
  }, {
    name: "?",
    path: "fireplace",
    secret: true
  }
]