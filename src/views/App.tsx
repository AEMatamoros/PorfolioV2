import React from "react";

//Custom Hooks
import { SelectLanguajeHook, SelectThemeHook } from "../hooks";

//Components
import { Header, Aside } from "../components";

export default function App() {
  //Theme
  let { wrapperRef, handleTheme, currentTheme } = SelectThemeHook();

  //Languaje
  let { currentLanguaje: texts, handleLanguaje } = SelectLanguajeHook();

  return (
    <>
      <div className="wrapper" ref={wrapperRef}>
        <section className="firstSection full-wh">
          <Header
            handleTheme={handleTheme}
            currentTheme={currentTheme}
            texts={texts}
            handleLanguaje={handleLanguaje}
          />
          <Aside />
          <main className="main-main bg-blue-300">Main</main>
        </section>
      </div>
      <section className="secondSection full-wh bg-green-700 ">
        <div className="child-section bg-yellow-300">Child Section 1</div>
        <div className="child-section bg-purple-300">Child Section 2</div>
        <footer className="main-footer bg-indigo-300">Footer</footer>
      </section>
    </>
  );
}
