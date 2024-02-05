import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { iCard } from '@Interfaces/index';
export default function Card({
    proyect,
    currentLanguaje,
    currentTheme,
    handleLightboxShow,
    setTemplate,
}: iCard) {
    return (
        <li className="custom-card p-4 sm:w-full md:w-full lg:w-6/12 xl:w-6/12 2xl:w-6/12">
            <LazyLoadImage
                src={proyect.img}
                alt="Calendar"
                className="proyect-img"
            />
            <div className={`card__body p-4 ` + currentTheme}>
                <h3 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {proyect.name}
                </h3>
                <button
                    onClick={() => {
                        handleLightboxShow();
                        setTemplate(
                            <div className="lightbox relative flex flex-col justify-center bg-light text-dark dark:bg-dark dark:text-light">
                                <img
                                    src={proyect.img}
                                    alt={proyect.description}
                                />
                                <div className="p-4">
                                    <h6>{proyect.name}</h6>
                                    <p>
                                        {currentLanguaje == 'ES'
                                            ? proyect.descriptionES
                                            : proyect.descriptionEN}
                                    </p>
                                    <div className="flex flex-wrap items-center justify-center pt-2 text-center">
                                        {proyect.techs.map((tec: string) => (
                                            <div
                                                key={`tec-name-${tec}`}
                                                className="mb-2 mr-2 bg-blue-500 px-3 py-1 text-xs text-white"
                                            >
                                                {tec}
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        className="focus:outline-none focus-within:outline-none absolute right-0 top-0 float-right inline-flex items-center border-none bg-main bg-transparent px-3 py-2 text-center text-sm font-medium text-light hover:bg-blue-500 focus:ring-4"
                                        href={proyect.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Demo
                                    </a>
                                </div>
                            </div>,
                        );
                    }}
                    className="focus:outline-none focus-within:outline-none inline-flex items-center border-none bg-main bg-transparent px-3 py-2 text-center text-sm font-medium text-light hover:bg-blue-500 focus:ring-4"
                >
                    {currentLanguaje == 'ES' ? 'Detalles' : 'Details'}
                </button>
            </div>
        </li>
    );
}
