import React from "react";
import PropTypes from "prop-types";

import { iHeaderProps } from "../interfaces/iCommons";
export default function Header({
  handleTheme,
  currentTheme,
  texts,
  handleLanguaje,
}: iHeaderProps) {
  return (
    <header className="main-header bg-main text-fontc dark:bg-black dark:text-white">
      <div className="header-begin text-fontc dark:text-white text-lg font-extrabold ">
        <span className="text-fontc dark:text-white">
          {" "}
          {texts.labels.userTitle}{" "}
        </span>
        |<span className="text-secondary"> {texts.labels.userJob} </span>
      </div>
      <div className="header-end">
        <label
          htmlFor="toggle-darkmode"
          className="flex items-center cursor-pointer relative "
        >
          <input
            type="checkbox"
            id="toggle-darkmode"
            className="sr-only"
            onChange={handleTheme}
          />
          <div className="toggle-bg bg-detail border-2 border-detail h-6 w-11 rounded-full"></div>
          <span className="ml-3 text-sm font-medium text-fontc dark:text-white ">
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
          <div className="toggle-bg bg-detail border-2 border-detail h-6 w-11 rounded-full"></div>
          <span className="ml-3 text-fontc text-sm font-medium dark:text-white">
            {texts.labels.languaje}
          </span>
        </label>
      </div>
    </header>
  );
}

Header.propTypes = {
  handleTheme: PropTypes.func,
  currentTheme: PropTypes.string,
  texts: PropTypes.object,
  handleLanguaje: PropTypes.func,
};
