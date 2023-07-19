import React from "react";
import { iHeaderProps } from "../interfaces/iCommons";
import { scrollToTop } from '../utils/scrollTop';

export default function Header({ currentTheme, texts, handleTheme, handleLanguaje }: iHeaderProps) {
  return (
    <header className="main__header w-full bg-light dark:bg-dark  flex items-center justify-between p-8 sticky top-0 z-50">
      {/* <i className="fa-solid fa-code"></i> */}
      <span className="text-dark dark:text-main text-xl font-bold cursor-pointer">Alexis Matamoros</span>
      <ul className="flex justify-end items-center gap-8 ">
        <li>
          {/* <label
            htmlFor="toggle-darkmode"
            className="flex items-center cursor-pointer relative "
          >
            <input
              type="checkbox"
              id="toggle-darkmode"
              className="sr-only"
              onChange={handleTheme}
            />
            <span className="toggle-bg bg-main border-2 border-main h-6 w-11 rounded-full"></span>
            <span className="ml-3 text-sm font-medium text-main dark:text-white text-center">
              {currentTheme !== "dark" ? (
                <i className="fa-solid fa-sun"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
              &nbsp;
            </span>
          </label> */}
          <span className="ml-3 text-sm font-medium text-main dark:text-white text-center cursor-pointer" onClick={handleTheme}>
            {currentTheme !== "dark" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
            &nbsp;
          </span>
        </li>
        <li>
          {/* <label
            htmlFor="toggle-languaje"
            className="flex items-center cursor-pointer relative"
          >
            <input
              type="checkbox"
              id="toggle-languaje"
              className="sr-only"
              onChange={handleLanguaje}
            />
            <span className="toggle-bg bg-main border-2 border-main h-6 w-11 rounded-full"></span>
            <span className="ml-3 text-main text-sm font-medium dark:text-white">
              {texts.labels.languaje}
            </span>
          </label> */}
          <span className="ml-3 text-main text-sm font-medium dark:text-white cursor-pointer" onClick={handleLanguaje}>
            {texts.labels.languaje}
          </span>
        </li>
      </ul>
    </header>
  );
}
