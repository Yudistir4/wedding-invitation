// import { CssBaseline, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./output.css";
import Cover from "./components/Cover";
import Opening from "./components/Opening";
import TentangKami from "./components/TentangKami";
import Surat from "./components/Surat";
import Jadwal from "./components/Jadwal";
import Lokasi from "./components/Lokasi";
import Time from "./components/Time";
import Galeri from "./components/Galeri";
import Rsvp from "./components/Rsvp";
import Himbauan from "./components/Himbauan";
import LoveStory from "./components/LoveStory";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <Router>
      <Route to="/">
        <div className={`${slide ? "" : "h-[100vh] w-full "} `}>
          <Cover slide={slide} setSlide={setSlide} />
          <div className="font-noto text-gray-700 flex flex-col space-y-12 ">
            <Opening />
            <TentangKami />
            <LoveStory />
            <Surat />
            <Jadwal />
            <Lokasi />
            <Time />
            <Galeri />
            <Rsvp />
            <Himbauan />
          </div>
        </div>
      </Route>
    </Router>
  );
}

export default App;
