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
      <Header
        handleTheme={handleTheme}
        currentTheme={currentTheme}
        texts={texts}
        handleLanguaje={handleLanguaje}
      />
      <div className="wrapper">
        <section className="firstSection full-wh">
          {/* <Aside /> */}
          <main className="main-main bg-blue-300">Main</main>
        </section>
      </div>
      <section className="secondSection full-wh bg-main dark:bg-black">
        <div className="child-section  dark:text-white">Child Section 1</div>
        <div className="child-section  dark:text-white">Child Section 2</div>
        <footer className="main-footer bg-indigo-300 dark:bg-black dark:text-white">
          Footer
        </footer>
      </section>
    </div>
  );
}
