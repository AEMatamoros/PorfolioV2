import React from "react";

import DarkModeHook from "./hooks/DarkModeHook";

export default function App() {
  let { wrapperRef, handleTheme } = DarkModeHook();

  return (
    <>
      <div className="wrapper" ref={wrapperRef}>
        <section className="firstSection full-wh bg-black ">
          <header className="main-header bg-green-300 dark:bg-black dark:text-white">
            <div className="header-begin dark:text-white">Logo + Data</div>
            <div className="header-end">
              <label
                htmlFor="toggle-darkmode"
                className="flex items-center cursor-pointer relative mb-4"
              >
                <input
                  type="checkbox"
                  id="toggle-darkmode"
                  className="sr-only"
                  onChange={handleTheme}
                />
                <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
                <span className="ml-3 text-gray-900 text-sm font-medium dark:text-white">
                  Dark Mode &nbsp;
                </span>
              </label>

              <label
                htmlFor="toggle-languaje"
                className="flex items-center cursor-pointer relative mb-4"
              >
                <input
                  type="checkbox"
                  id="toggle-languaje"
                  className="sr-only"
                />
                <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
                <span className="ml-3 text-gray-900 text-sm font-medium dark:text-white">
                  Languaje
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
        <div className="child-section bg-yellow-300">Child Section 1</div>
        <div className="child-section bg-purple-300">Child Section 2</div>
      </section>
    </>
  );
}
