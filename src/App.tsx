import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
//Custom Hooks
import SelecThemeHook from "./hooks/SelectThemeHook";
import SelectLanguajeHook from "./hooks/SelectLanguajeHook";

import { decrement, increment } from "./slices/counterSlice";

export default function App() {
  //Theme
  let { wrapperRef, handleTheme, currentTheme } = SelecThemeHook();

  //Languaje
  let { currentLanguaje: texts, handleLanguaje } = SelectLanguajeHook();

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="wrapper" ref={wrapperRef}>
        <section className="firstSection full-wh bg-black ">
          <header className="main-header bg-green-300 dark:bg-black dark:text-white">
            <div className="header-begin dark:text-white">Logo + Data</div>
            <div className="header-end">
              <label
                htmlFor="toggle-darkmode"
                className="flex items-center cursor-pointer relative"
              >
                <input
                  type="checkbox"
                  id="toggle-darkmode"
                  className="sr-only"
                  onChange={handleTheme}
                />
                <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
                <span className="ml-3 text-gray-900 text-sm font-medium dark:text-white">
                  {currentTheme !== "dark"
                    ? texts.labels.themeLight
                    : texts.labels.themeDark}
                  &nbsp;
                </span>
              </label>

              <label
                htmlFor="toggle-languaje"
                className="flex items-center cursor-pointer relative"
              >
                <input
                  type="checkbox"
                  id="toggle-languaje"
                  className="sr-only"
                  onChange={handleLanguaje}
                />
                <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
                <span className="ml-3 text-gray-900 text-sm font-medium dark:text-white">
                  {texts.labels.languaje}
                </span>
              </label>
            </div>
          </header>
          <aside className="main-aside bg-red-300">Aside</aside>
          <main className="main-main bg-blue-300">Main</main>
          <footer className="main-footer bg-yellow-300">Footer</footer>
        </section>
      </div>
      <section className="secondSection full-wh bg-green-700 text-white">
        <div className="child-section bg-yellow-300">
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
        <div className="child-section bg-purple-300">Child Section 2</div>
      </section>
    </>
  );
}
