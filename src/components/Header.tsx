import { Dropdown } from "flowbite-react";
import { iHeaderProps } from "../interfaces/iCommons";

import PropTypes from "prop-types";
export default function Header({
  handleTheme,
  currentTheme,
  texts,
  handleLanguaje,
}: iHeaderProps) {
  return (
    <header
      className={`main-header bg-main text-fontc dark:bg-black dark:text-white ${
        currentTheme !== "dark" ? "shadow-cl" : "shadow-cd"
      }`}
    >
      <div className="header-begin text-fontc dark:text-white text-lg font-extrabold ">
        <span className="text-fontc dark:text-white">
          {" "}
          {texts.labels.userTitle}{" "}
        </span>
        <span className="text-detail dark:text-secondary">|</span>
        <span className="text-secondary dark:text-detail">
          {" "}
          {texts.labels.userJob}{" "}
        </span>
      </div>
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
              <div className="toggle-bg bg-secondary border-2 border-secondary h-6 w-11 rounded-full"></div>
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
              <div className="toggle-bg bg-secondary border-2 border-secondary h-6 w-11 rounded-full"></div>
              <span className="ml-3 text-fontc text-sm font-medium dark:text-white">
                {texts.labels.languaje}
              </span>
            </label>
          </Dropdown.Item>
        </Dropdown>
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
