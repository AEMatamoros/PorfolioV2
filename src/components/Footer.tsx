import React from "react";
import { iFooterProps } from "../interfaces/iFooterProps";
export default function Footer({ msg }: iFooterProps) {
  return (
    <footer className="main__footer bg-indigo-400 text-light p-16 flex justify-center items-center flex-col">
      <ul className="sm:w-full md:w-full lg:6/12 xl:6/12 2xl:6/12 flex justify-center gap-4 mb-8">
        <li className="w-16 h-16 bg-main flex justify-center items-center hover:bg-green-500 dark:text-light cursor-pointer">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alexis-eduardo-matamoros-mayorquin-3a87411b5"
          >
            <i className="fa-2xl fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li className="w-16 h-16 bg-main flex justify-center items-center hover:bg-green-500 dark:text-light cursor-pointer">
          <a target="_blank" href="https://github.com/AEMatamoros">
            <i className="fa-2xl fa-brands fa-github"></i>
          </a>
        </li>
        <li className="w-16 h-16 bg-main flex justify-center gap-x-8 items-center hover:bg-green-500 dark:text-light cursor-pointer">
          <a target="_blank" href="https://www.instagram.com/alev_stream/">
            <i className="fa-2xl fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="w-16 h-16 bg-main flex justify-center gap-x-8 items-center hover:bg-green-500 dark:text-light cursor-pointer">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCpLFVrIKVwnDIVUuno9TlzA"
          >
            <i className="fa-2xl fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
      <span className="font-extrabold italic text-center">{msg}</span>
    </footer>
  );
}
