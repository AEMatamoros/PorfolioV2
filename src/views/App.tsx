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
    <div ref={wrapperRef}>
      <div className="wrapper">
        <section className="firstSection full-wh">
          <Header
            handleTheme={handleTheme}
            currentTheme={currentTheme}
            texts={texts}
            handleLanguaje={handleLanguaje}
          />
          <Aside />
          <main className="main-main bg-main dark:bg-black dark:text-white">
            Main
          </main>
        </section>
      </div>
      <section className="secondSection full-wh bg-main dark:bg-black">
        <div className="child-section bg-secondary dark:bg-detail dark:text-white">
          Child Section
        </div>
        <footer className="main-footer bg-indigo-300 dark:bg-black dark:text-white">
          Footer
        </footer>
      </section>
    </div>
  );
}
