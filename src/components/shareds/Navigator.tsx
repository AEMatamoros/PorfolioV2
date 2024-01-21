import React from 'react';

export default function Navigator({
    heroRef,
    aboutRef,
    expRef,
    proyectsRef,
    active,
    currentTheme,
    handleContactformOpen,
    texts, // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        <aside className={`navigator fixed left-0  ${currentTheme}`}>
            <ul className="relative hidden flex-col gap-4 sm:hidden md:hidden  lg:flex xl:flex 2xl:flex">
                <li
                    onClick={() => {
                        handleScroll(heroRef.current);
                    }}
                    className={`h-28  w-28 ${
                        active == 'hero'
                            ? 'scale-125 transform font-bold text-dark dark:text-light'
                            : 'text-blue-500'
                    }  flex cursor-pointer items-center justify-center gap-x-8  hover:text-blue-500`}
                >
                    <span>
                        <i className=" fa-brands fa-fort-awesome-alt"></i>
                    </span>
                </li>
                <li
                    onClick={() => {
                        handleScroll(aboutRef.current);
                    }}
                    className={`h-28   w-28 ${
                        active == 'about' || active == 'techs'
                            ? 'scale-125 transform font-bold text-dark dark:text-light'
                            : 'text-blue-500'
                    }  flex -rotate-90 transform cursor-pointer items-center  justify-center gap-x-8 hover:text-blue-500`}
                >
                    {/* <i className=" fa-regular fa-circle-user"></i> */}
                    <span>{texts.labels.mainTitle}</span>
                </li>
                <li
                    onClick={() => {
                        handleScroll(expRef.current);
                    }}
                    className={`h-28   w-28 ${
                        active == 'experience'
                            ? 'scale-125 transform font-bold text-dark dark:text-light'
                            : 'text-blue-500'
                    }  flex -rotate-90 transform cursor-pointer items-center  justify-center gap-x-8 hover:text-blue-500`}
                >
                    {/* <i className=" fa-solid fa-circle-dot"></i> */}
                    <span>{texts.labels.experience}</span>
                </li>
                <li
                    onClick={() => {
                        handleScroll(proyectsRef.current);
                    }}
                    className={`h-28   w-28 ${
                        active == 'portfolio'
                            ? 'scale-125 transform font-bold text-dark dark:text-light'
                            : 'text-blue-500'
                    }  flex -rotate-90 transform cursor-pointer items-center  justify-center gap-x-8 hover:text-blue-500`}
                >
                    {/* <i className=" fa-brands fa-connectdevelop"></i> */}
                    <span>{texts.labels.proyectsTitle}</span>
                </li>
                <li
                    onClick={() => {
                        handleContactformOpen();
                    }}
                    className={`h-28  w-28 ${
                        active == 'hero'
                            ? 'scale-125 transform font-bold text-dark dark:text-light'
                            : 'text-blue-500'
                    }  flex cursor-pointer items-center justify-center gap-x-8  hover:text-blue-500`}
                >
                    <span>
                        <i className="fa-regular fa-envelope"></i>
                    </span>
                </li>
            </ul>
        </aside>
    );
}
