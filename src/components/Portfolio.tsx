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
                className="main__work  section-hidden flex w-full flex-col items-center justify-center p-4 sm:p-4 md:p-4 lg:p-16 xl:p-16"
                id="portfolio"
                ref={reference}
            >
                <div className="container">
                    <SecondaryTitle subtitle={subtitle} />
                    <ul className="proyects-container proyects-container flex w-full flex-wrap items-center justify-center">
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
                    <div className="flex items-center justify-center gap-4">
                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1,
                        ).map(page => (
                            <button
                                className={` ${
                                    currentPage == page
                                        ? 'bg-green-400'
                                        : 'bg-blue-400'
                                } h-10  w-10 p-2 text-white hover:bg-green-500`}
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
