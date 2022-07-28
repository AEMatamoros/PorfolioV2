import React from "react";

//Custom Hooks
import SelecThemeHook from "../hooks/SelectThemeHook";
import SelectLanguajeHook from "../hooks/SelectLanguajeHook";

import Header from "../components/Header";

export default function App() {
  //Theme
  let { wrapperRef, handleTheme, currentTheme } = SelecThemeHook();

  //Languaje
  let { currentLanguaje: texts, handleLanguaje } = SelectLanguajeHook();

  return (
    <>
      <div className="wrapper" ref={wrapperRef}>
        <section className="firstSection full-wh bg-black ">
          <Header
            handleTheme={handleTheme}
            currentTheme={currentTheme}
            texts={texts}
            handleLanguaje={handleLanguaje}
          />
          <aside className="main-aside bg-red-300">Aside</aside>
          <main className="main-main bg-blue-300">Main</main>
          <footer className="main-footer bg-indigo-300">Footer</footer>
        </section>
      </div>
      <section className="secondSection full-wh bg-green-700 ">
        <div className="child-section bg-yellow-300">Child Section 1</div>
        <div className="child-section bg-purple-300">Child Section 2</div>
      </section>
    </>
  );
}
