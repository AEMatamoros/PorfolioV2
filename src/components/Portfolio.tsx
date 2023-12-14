import React, { useState } from 'react';
import { Card } from './index';
import { iPortfolioProps } from '../interfaces/iPortfolioProps';
import { PROYECTS } from '../constants/Portfolio';
import useLightbox from '../hooks/useLightbox';
import SecondaryTitle from './shareds/SecondaryTitle';
export default function Portfolio({
    subtitle,
    currentLanguaje,
    currentTheme,
    reference,
}: iPortfolioProps) {
    const { Lightbox, handleLightboxShow, setTemplate } = useLightbox();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = PROYECTS.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(PROYECTS.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <>
            <section
                className="main__work  w-full flex flex-col justify-center items-center p-4 sm:p-4 md:p-4 lg:p-16 xl:p-16 section-hidden"
                id="portfolio"
                ref={reference}
            >
                <div className="container">
                    <SecondaryTitle subtitle={subtitle} />
                    <ul className="proyects-container flex flex-wrap justify-center items-center w-full proyects-container">
                        {currentItems.map((proyect, index) => (
                            <Card
                                proyect={proyect}
                                key={index}
                                currentLanguaje={currentLanguaje}
                                currentTheme={currentTheme}
                                handleLightboxShow={handleLightboxShow}
                                setTemplate={setTemplate}
                            />
                        ))}
                    </ul>
                    <div className="flex justify-center items-center gap-4">
                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1,
                        ).map(page => (
                            <button
                                className="bg-blue-400 text-white  hover:bg-green-500 p-2 w-10 h-10"
                                key={page}
                                onClick={() => handlePageChange(page)}
                                title={`${page}`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            {Lightbox}
        </>
    );
}
