import React from 'react';
import { iFooterProps } from '../interfaces/iFooterProps';
export default function Footer({ msg }: iFooterProps) {
    return (
        <footer className="main__footer z-10  flex flex-col items-center justify-center p-16 text-light">
            <span className="mb-4 text-dark dark:text-white">
                &copy; 2023 Alexis Matamoros
            </span>
            <ul className="lg:6/12 xl:6/12 2xl:6/12 mb-8 flex justify-center gap-4 sm:w-full md:w-full">
                <li className="flex h-16 w-16 cursor-pointer items-center justify-center bg-blue-400 hover:bg-blue-500 dark:text-light">
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/alexis-eduardo-matamoros-mayorquin-3a87411b5"
                        rel="noreferrer"
                    >
                        <i className="fa-2xl fa-brands fa-linkedin-in"></i>
                        <span>Linked In</span>
                    </a>
                </li>
                <li className="flex h-16 w-16 cursor-pointer items-center justify-center bg-blue-400 hover:bg-purple-500 dark:text-light">
                    <a
                        target="_blank"
                        href="https://github.com/AEMatamoros"
                        rel="noreferrer"
                    >
                        <i className="fa-2xl fa-brands fa-github"></i>
                        <span>Github</span>
                    </a>
                </li>
                <li className="flex h-16 w-16 cursor-pointer items-center justify-center gap-x-8 bg-blue-400 hover:bg-red-500 dark:text-light">
                    <a
                        target="_blank"
                        href="https://www.instagram.com/wecamefromthelands/"
                        rel="noreferrer"
                    >
                        <i className="fa-2xl fa-brands fa-instagram"></i>
                        <span>Instagram</span>
                    </a>
                </li>
                <li className="flex h-16 w-16 cursor-pointer items-center justify-center gap-x-8 bg-blue-400 hover:bg-red-500 dark:text-light">
                    <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UCpLFVrIKVwnDIVUuno9TlzA"
                        rel="noreferrer"
                    >
                        <i className="fa-2xl fa-brands fa-youtube"></i>
                        <span>Youtube</span>
                    </a>
                </li>
                <li className="flex h-16 w-16 cursor-pointer items-center justify-center gap-x-8 bg-blue-400 hover:bg-purple-500 dark:text-light">
                    <a
                        target="_blank"
                        href="https://www.twitch.tv/alevstream"
                        rel="noreferrer"
                    >
                        <i className="fa-2xl fa-brands fa-twitch"></i>
                        <span>Twitch</span>
                    </a>
                </li>
            </ul>
            <span className=" w-full text-left text-dark dark:text-white">
                {msg} - ❤️
            </span>
        </footer>
    );
}
