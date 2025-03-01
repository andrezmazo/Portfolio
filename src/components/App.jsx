import React, { useRef, useEffect, useState } from "react";
import Header from "./Header";
import SideEmail from "./SideEmail";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Technologies from "./Technologies";
import Work from "./Work";
import Projects from "./Projects";
import Menu from "./Menu";

import { ParallaxProvider } from "react-scroll-parallax";

import "./App.scss";
import useLocalStorage from "use-local-storage";
import ParticlesBackground from "./ParticlesBackground";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [isLoading, setIsLoading] = useState(true);
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    // const observer = new IntersectionObserver((entries) => {
    //   const entry = entries[0];
    //   setMyElementIsVisible(entry.isIntersecting);
    //   console.log("entry", entry);
    // });
    // observer.observe(myRef.current);
    // console.log("myRef",myRef.current)´´ '
  });
  // const square = document.querySelector(".square");
  // square.classList.remove("square-transition");

  // // Create the observer, same as before:
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       square.classList.add("square-transition");
  //       return;
  //     }

  //     square.classList.remove("square-transition");
  //   });
  // });

  // observer.observe(document.querySelector(".square-wrapper"));

  return (
    <React.Fragment>
      <div data-theme={theme}>
        <ParallaxProvider>
          {isLoading ? (
            <div className="loading-screen">
              <div className="spinner"></div>
            </div>
          ) : (
            <>
              {/* <button className="switch" onClick={switchTheme}></button> */}
              <Header />
              <SideEmail />
              <Home />
              <About myRef={myRef} />
              <Technologies />
              <Work />
              <Projects />
              <Contact />
              <Menu />
              {/* <ParticlesBackground/> */}
            </>
          )}
        </ParallaxProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
