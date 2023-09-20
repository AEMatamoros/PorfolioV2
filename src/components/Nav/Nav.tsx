import React from "react";

interface iNav {
  scrollToTop: () => void;
  handleTheme: () => void;
  handleLanguaje: () => void;
  currentTheme: string;
  texts: any;
}

export default function Nav({
  scrollToTop,
  handleTheme,
  handleLanguaje,
  currentTheme,
  texts,
}: iNav) {
  return (
    <nav className="container flex justify-between">
      <NavLogo scrollToTop={scrollToTop} />
      <NavList
        handleTheme={handleTheme}
        handleLanguaje={handleLanguaje}
        currentTheme={currentTheme}
        texts={texts}
      />
    </nav>
  );
}

interface iNavLogo {
  scrollToTop: () => void;
}

function NavLogo({ scrollToTop }: iNavLogo) {
  return (
    <span
      className="text-dark dark:text-light text-xl font-bold cursor-pointer"
      onClick={scrollToTop}
    >
      <span>
        <i className="fa-solid fa-terminal fa-fade text-main mr-2"></i>
      </span>{" "}
      Alexis Matamoros
    </span>
  );
}

interface iNavList {
  handleTheme: () => void;
  handleLanguaje: () => void;
  currentTheme: string;
  texts: any;
}

function NavList({
  handleTheme,
  handleLanguaje,
  currentTheme,
  texts,
}: iNavList) {
  return (
    <ul className="flex justify-end items-center gap-8 ">
      <NavListTheme handleTheme={handleTheme} currentTheme={currentTheme} />
      <NavListLanguaje handleLanguaje={handleLanguaje} texts={texts} />
    </ul>
  );
}

interface iNavListOption {
  handleTheme: () => void;
  currentTheme: string;
}

function NavListTheme({ handleTheme, currentTheme }: iNavListOption) {
  return (
    <li>
      <span
        className="ml-3 text-sm font-medium text-main dark:text-white text-center cursor-pointer"
        onClick={handleTheme}
      >
        {currentTheme !== "dark" ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
        &nbsp;
      </span>
    </li>
  );
}

interface iNavListLanguaje {
  handleLanguaje: () => void;
  texts: any;
}

function NavListLanguaje({ handleLanguaje, texts }: iNavListLanguaje) {
  return (
    <li>
      <span
        className="ml-3 text-main text-sm font-medium dark:text-white cursor-pointer"
        onClick={handleLanguaje}
      >
        {texts.labels.languaje}
      </span>
    </li>
  );
}
