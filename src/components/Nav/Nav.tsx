import React from 'react';

interface iNav {
    scrollToTop: () => void;
    handleTheme: () => void;
    handleLanguaje: () => void;
    handleContactformOpen: () => void;
    currentTheme: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    texts: any;
}

export default function Nav({
    // scrollToTop,
    handleTheme,
    handleLanguaje,
    currentTheme,
    handleContactformOpen,
    texts,
}: iNav) {
    return (
        <nav className="nav flex justify-end">
            {/* <NavLogo scrollToTop={scrollToTop} /> */}
            <NavList
                handleTheme={handleTheme}
                handleLanguaje={handleLanguaje}
                handleContactformOpen={handleContactformOpen}
                currentTheme={currentTheme}
                texts={texts}
            />
        </nav>
    );
}

// interface iNavLogo {
//     scrollToTop: () => void;
// }

// function NavLogo({ scrollToTop }: iNavLogo) {
//     return (
//         <span
//             className="text-dark dark:text-light text-xl font-bold cursor-pointer pl-8"
//             onClick={scrollToTop}
//         >
//             {/* <span>
//                 <i className="fa-solid fa-terminal fa-fade text-blue-500 mr-2"></i>
//             </span> */}
//             Alexis Matamoros
//         </span>
//     );
// }

interface iNavList {
    handleTheme: () => void;
    handleLanguaje: () => void;
    handleContactformOpen: () => void;
    currentTheme: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    texts: any;
}

function NavList({
    handleTheme,
    handleLanguaje,
    handleContactformOpen,
    currentTheme,
    texts,
}: iNavList) {
    return (
        <ul className="flex items-center justify-end gap-8 ">
            <NavListTheme
                handleTheme={handleTheme}
                currentTheme={currentTheme}
            />
            <NavListLanguaje handleLanguaje={handleLanguaje} texts={texts} />
            <li className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden">
                <span className="ml-3 cursor-pointer text-center text-sm font-medium text-blue-500 dark:text-white">
                    <i
                        className="fa-regular fa-envelope"
                        onClick={handleContactformOpen}
                    ></i>
                </span>
            </li>
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
                className="ml-3 cursor-pointer text-center text-sm font-medium text-blue-500 dark:text-white"
                onClick={handleTheme}
            >
                {currentTheme !== 'dark' ? (
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    texts: any;
}

function NavListLanguaje({ handleLanguaje, texts }: iNavListLanguaje) {
    return (
        <li>
            <span
                className="ml-3 cursor-pointer text-sm font-medium text-blue-500 dark:text-white"
                onClick={handleLanguaje}
            >
                {texts.labels.languaje}
            </span>
        </li>
    );
}
