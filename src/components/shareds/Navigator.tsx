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
        <aside className={`fixed left-0 navigator  ${currentTheme}`}>
            <ul className="hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex  flex-col gap-4 relative">
                <li
                    onClick={() => {
                        handleScroll(heroRef.current);
                    }}
                    className={`w-28  h-28 ${
                        active == 'hero'
                            ? 'text-dark dark:text-light transform scale-125 font-bold'
                            : 'text-blue-500'
                    }  flex justify-center gap-x-8 items-center hover:text-blue-500  cursor-pointer`}
                >
                    <span>
                        <i className=" fa-brands fa-fort-awesome-alt"></i>
                    </span>
                </li>
                <li
                    onClick={() => {
                        handleScroll(aboutRef.current);
                    }}
                    className={`w-28   h-28 ${
                        active == 'about' || active == 'techs'
                            ? 'text-dark dark:text-light transform scale-125 font-bold'
                            : 'text-blue-500'
                    }  flex justify-center gap-x-8 items-center hover:text-blue-500  cursor-pointer transform -rotate-90`}
                >
                    {/* <i className=" fa-regular fa-circle-user"></i> */}
                    <span>{texts.labels.mainTitle}</span>
                </li>
                <li
                    onClick={() => {
                        handleScroll(expRef.current);
                    }}
                    className={`w-28   h-28 ${
                        active == 'experience'
                            ? 'text-dark dark:text-light transform scale-125 font-bold'
                            : 'text-blue-500'
                    }  flex justify-center gap-x-8 items-center hover:text-blue-500  cursor-pointer transform -rotate-90`}
                >
                    {/* <i className=" fa-solid fa-circle-dot"></i> */}
                    <span>{texts.labels.experience}</span>
                </li>
                <li
                    onClick={() => {
                        handleScroll(proyectsRef.current);
                    }}
                    className={`w-28   h-28 ${
                        active == 'portfolio'
                            ? 'text-dark dark:text-light transform scale-125 font-bold'
                            : 'text-blue-500'
                    }  flex justify-center gap-x-8 items-center hover:text-blue-500  cursor-pointer transform -rotate-90`}
                >
                    {/* <i className=" fa-brands fa-connectdevelop"></i> */}
                    <span>{texts.labels.proyectsTitle}</span>
                </li>
                <li
                    onClick={() => {
                        handleContactformOpen();
                    }}
                    className={`w-28  h-28 ${
                        active == 'hero'
                            ? 'text-dark dark:text-light transform scale-125 font-bold'
                            : 'text-blue-500'
                    }  flex justify-center gap-x-8 items-center hover:text-blue-500  cursor-pointer`}
                >
                    <span>
                        <i className="fa-regular fa-envelope"></i>
                    </span>
                </li>
            </ul>
        </aside>
    );
}
