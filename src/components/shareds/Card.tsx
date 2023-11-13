import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { iCard } from '../../interfaces/iCard';
export default function Card({
    proyect,
    currentLanguaje,
    currentTheme,
    handleLightboxShow,
    setTemplate,
}: iCard) {
    return (
        <li className="sm:w-full md:w-full lg:w-4/12 xl:w-3/12 2xl:w-3/12 custom-card">
            <LazyLoadImage
                src={proyect.img}
                alt="Calendar"
                className="proyect-img"
            />
            <div className={`card__body p-4 ` + currentTheme}>
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {proyect.name}
                </h3>
                <button
                    onClick={() => {
                        handleLightboxShow();
                        setTemplate(
                            <div className="relative lightbox flex flex-col justify-center text-dark bg-light dark:bg-dark dark:text-light">
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
                                    <div className="flex flex-wrap justify-center items-center text-center pt-2">
                                        {proyect.techs.map((tec: string) => (
                                            <div
                                                key={`tec-name-${tec}`}
                                                className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-blue-500 text-white"
                                            >
                                                {tec}
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        className="absolute right-0 top-0 float-right inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light bg-transparent border-none focus:ring-4 bg-main hover:bg-blue-500 focus:outline-none focus-within:outline-none"
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
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light bg-transparent border-none focus:ring-4 bg-main hover:bg-blue-500 focus:outline-none focus-within:outline-none"
                >
                    {currentLanguaje == 'ES' ? 'Detalles' : 'Details'}
                </button>
            </div>
        </li>
    );
}