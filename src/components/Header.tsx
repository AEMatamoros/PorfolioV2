import React from "react";
import { iHeaderProps } from "../interfaces/iCommons";

export default function Header({ currentTheme, texts, handleTheme, handleLanguaje }: iHeaderProps) {
  return (
    <header className="main__header w-full bg-light dark:bg-dark flex items-center justify-between p-8 sticky top-0">
      <span className="text-dark dark:text-main text-2xl font-bold">
        <i className="fa-solid fa-code"></i>
      </span>
      <ul className="flex justify-end items-center gap-8 ">
        <li>
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
            <span className="toggle-bg bg-main border-2 border-main h-6 w-11 rounded-full"></span>
            <span className="ml-3 text-sm font-medium text-main dark:text-white text-center">
              {currentTheme !== "dark" ? (
                <i className="fa-solid fa-sun"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
              &nbsp;
            </span>
          </label>
        </li>
        <li>
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
            <span className="toggle-bg bg-main border-2 border-main h-6 w-11 rounded-full"></span>
            <span className="ml-3 text-main text-sm font-medium dark:text-white">
              {texts.labels.languaje}
            </span>
          </label>
        </li>
      </ul>
    </header>
  );
}
