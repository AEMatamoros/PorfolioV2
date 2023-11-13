import React from 'react';

export default function Navigator({
    heroRef,
    aboutRef,
    expRef,
    proyectsRef,
    active,
    currentTheme, // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleScroll = (ref: any) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };
    return (
        <aside
            className={`fixed left-0 navigator bg-indigo-400 ${currentTheme}`}
        >
            <ul className="hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex  flex-col gap-4 relative">
                <li
                    onClick={() => {
                        handleScroll(heroRef.current);
                    }}
                    className={`w-16  h-16 ${
                        active == 'hero'
                            ? 'text-dark dark:text-light transform scale-125'
                            : 'text-blue-500'
                    }  flex justify-center gap-x-8 items-center hover:text-blue-500  cursor-pointer`}
                >
                    <i className=" fa-brands fa-fort-awesome-alt"></i>
                </li>
                <li
                    onClick={() => {
                        handleScroll(aboutRef.current);
                    }}
                    className={`w-16  h-16 ${
                        active == 'about' || active == 'techs'
                            ? 'text-dark dark:text-light transform scale-125'
                            : 'text-blue-500'
                    }  flex justify-center gap-x-8 items-center hover:text-blue-500  cursor-pointer`}
                >
                    <i className=" fa-regular fa-circle-user"></i>
                </li>
                <li
                    onClick={() => {
                        handleScroll(expRef.current);
                    }}
                    className={`w-16  h-16 ${
                        active == 'experience'
                            ? 'text-dark dark:text-light transform scale-125'
                            : 'text-blue-500'
                    }  flex justify-center gap-x-8 items-center hover:text-blue-500  cursor-pointer`}
                >
                    <i className=" fa-solid fa-circle-dot"></i>
                </li>
                <li
                    onClick={() => {
                        handleScroll(proyectsRef.current);
                    }}
                    className={`w-16  h-16 ${
                        active == 'portfolio'
                            ? 'text-dark dark:text-light transform scale-125'
                            : 'text-blue-500'
                    }  flex justify-center gap-x-8 items-center hover:text-blue-500  cursor-pointer`}
                >
                    <i className=" fa-brands fa-connectdevelop"></i>
                </li>
            </ul>
        </aside>
    );
}
