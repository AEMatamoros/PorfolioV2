import React from "react";

export default function Footer({ msg }: { msg: string }) {
  return (
    <footer className="main__footer bg-dark dark:bg-light text-light dark:text-dark p-16 flex justify-center items-center flex-col">
      <ul className="sm:w-full md:w-full lg:6/12 xl:6/12 2xl:6/12 flex justify-center gap-4 mb-8">
        <li className="w-16 h-16 bg-main flex justify-center items-center hover:bg-pink-500 dark:text-light cursor-pointer">
          <a href="https://www.linkedin.com/in/alexis-eduardo-matamoros-mayorquin-3a87411b5">
            <i className="fa-2xl fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li className="w-16 h-16 bg-main flex justify-center items-center hover:bg-pink-500 dark:text-light cursor-pointer">
          <a href="https://github.com/AEMatamoros">
            <i className="fa-2xl fa-brands fa-github"></i>
          </a>
        </li>
        <li className="w-16 h-16 bg-main flex justify-center gap-x-8 items-center hover:bg-pink-500 dark:text-light cursor-pointer">
          <a href="https://www.instagram.com/alev_stream/">
            <i className="fa-2xl fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
      <span className="font-extrabold italic text-center">{msg}</span>
    </footer>
  );
}
