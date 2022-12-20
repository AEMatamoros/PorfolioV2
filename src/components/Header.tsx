import { Dropdown } from "flowbite-react";
import { iHeaderProps } from "../interfaces/iCommons";
import Aside from "./Aside";
import { createContext, useContext } from "react";

function Brand() {
  const { texts } = useContext(HeaderContext);
  return (
    <div className="header-begin text-fontc dark:text-white text-lg font-extrabold ">
      <span className="header-text text-fontc hide-mov">
        {" "}
        {texts.labels.userTitle}{" "}
      </span>
      <span className="header-text text-fontc hide-desk show-mov">AM</span>
      <span className="header-text text-secondary dark:text-detail">|</span>
      <span className="header-text text-secondary dark:text-detail hide-mov">
        {" "}
        {texts.labels.userJob}{" "}
      </span>
      <span className="header-text text-fontc hide-desk show-mov">Dev</span>
    </div>
  );
}

function HeaderOptions() {
  const { handleTheme, currentTheme, handleLanguaje, texts } =
    useContext(HeaderContext);
  return (
    <div className="header-end">
      <Dropdown
        label={
          <i className="fa-solid fa-sliders fa-xl active-icon dark:text-espetial dark:hover:text-detail"></i>
        }
        floatingArrow={false}
        arrowIcon={false}
        color="transparent"
      >
        <Dropdown.Item>
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
            <div className="toggle-bg bg-fontc border-2 border-fontc h-6 w-11 rounded-full"></div>
            <span className="ml-3 text-sm font-medium text-fontc dark:text-white text-center">
              {currentTheme !== "dark" ? (
                <i className="fa-solid fa-sun"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
              &nbsp;
            </span>
          </label>
        </Dropdown.Item>
        <Dropdown.Item>
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
            <div className="toggle-bg bg-fontc border-2 border-fontc h-6 w-11 rounded-full"></div>
            <span className="ml-3 text-fontc text-sm font-medium dark:text-white">
              {texts.labels.languaje}
            </span>
          </label>
        </Dropdown.Item>
        <Dropdown.Item>
          <button className="bg-secondary hover:bg-secondary-hover my-4 text-main dark:text-fontc dark:bg-detail dark:hover:bg-detail-hover font-bold py-2 px-4 rounded">
            {texts.labels.cvButton}
          </button>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export const HeaderContext = createContext({} as iHeaderProps);
export default function Header({
  children,
  handleTheme,
  currentTheme,
  texts,
  handleLanguaje,
}: iHeaderProps) {
  const { Provider } = HeaderContext;

  return (
    <Provider
      value={{
        handleLanguaje,
        handleTheme,
        currentTheme,
        texts,
      }}
    >
      <header
        className={`main-header bg-main text-fontc dark:bg-black dark:text-white h-16 w-full ${
          currentTheme !== "dark" ? "shadow-cl" : "shadow-cd"
        }`}
      >
        {children}
      </header>
    </Provider>
  );
}

Header.HeaderBrand = Brand;
Header.HeaderOptions = HeaderOptions;
