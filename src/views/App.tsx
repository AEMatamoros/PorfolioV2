import { Suspense } from "react";
//Custom Hooks
import { SelectLanguajeHook, SelectThemeHook } from "../hooks";

//Components
import { Header, Aside, Loader } from "../components";
import { Outlet } from "react-router-dom";

export default function App() {
  //Theme
  let { wrapperRef, handleTheme, currentTheme } = SelectThemeHook();

  //Languaje
  let { currentLanguaje: texts, handleLanguaje } = SelectLanguajeHook();

  return (
    <div ref={wrapperRef}>
      <div className="wrapper">
        <div
          className={currentTheme !== "dark" ? "main-bg" : "main-bg dark-bg"}
        ></div>
        <section className="firstSection full-wh">
          <Header
            handleTheme={handleTheme}
            currentTheme={currentTheme}
            texts={texts}
            handleLanguaje={handleLanguaje}
          />
          <Aside />
          <main className="main-main dark:text-white px-4">
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
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
