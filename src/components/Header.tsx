import React from "react";

export default function Header({
  handleTheme,
  currentTheme,
  texts,
  handleLanguaje,
}: any) {
  return (
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
  );
}
