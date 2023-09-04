import React from "react";
import { iHeaderProps } from "../interfaces/iCommons";
import { scrollToTop } from "../utils/scrollTop";
import Nav from "./Nav/Nav";
export default function Header({
  currentTheme,
  texts,
  handleTheme,
  handleLanguaje,
}: iHeaderProps) {
  return (
    <header className="main__header w-full bg-light dark:bg-dark  flex items-center justify-between p-8 sticky top-0 z-10">
      <Nav
        scrollToTop={scrollToTop}
        handleTheme={handleTheme}
        handleLanguaje={handleLanguaje}
        currentTheme={currentTheme}
        texts={texts}
      />
    </header>
  );
}
