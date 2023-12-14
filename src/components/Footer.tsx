import React from 'react';
import { iFooterProps } from '../interfaces/iFooterProps';
export default function Footer({ msg }: iFooterProps) {
    return (
        <footer className="main__footer z-10  text-light p-16 flex justify-center items-center flex-col">
            <span className="text-dark dark:text-white mb-4">
                &copy; 2023 Alexis Matamoros
            </span>
            <ul className="sm:w-full md:w-full lg:6/12 xl:6/12 2xl:6/12 flex justify-center gap-4 mb-8">
                <li className="w-16 h-16 bg-blue-400 flex justify-center items-center hover:bg-blue-500 dark:text-light cursor-pointer">
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/alexis-eduardo-matamoros-mayorquin-3a87411b5"
                        rel="noreferrer"
                    >
                        <i className="fa-2xl fa-brands fa-linkedin-in"></i>
                    </a>
                </li>
                <li className="w-16 h-16 bg-blue-400 flex justify-center items-center hover:bg-blue-500 dark:text-light cursor-pointer">
                    <a
                        target="_blank"
                        href="https://github.com/AEMatamoros"
                        rel="noreferrer"
                    >
                        <i className="fa-2xl fa-brands fa-github"></i>
                    </a>
                </li>
                <li className="w-16 h-16 bg-blue-400 flex justify-center gap-x-8 items-center hover:bg-blue-500 dark:text-light cursor-pointer">
                    <a
                        target="_blank"
                        href="https://www.instagram.com/alev_stream/"
                        rel="noreferrer"
                    >
                        <i className="fa-2xl fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li className="w-16 h-16 bg-blue-400 flex justify-center gap-x-8 items-center hover:bg-blue-500 dark:text-light cursor-pointer">
                    <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UCpLFVrIKVwnDIVUuno9TlzA"
                        rel="noreferrer"
                    >
                        <i className="fa-2xl fa-brands fa-youtube"></i>
                    </a>
                </li>
            </ul>
            <span className=" text-left w-full text-dark dark:text-white">
                {msg} - ❤️
            </span>
        </footer>
    );
}
