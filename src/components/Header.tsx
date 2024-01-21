import React from 'react';
import { iHeaderProps } from '../interfaces/iCommons';
import { scrollToTop } from '../utils/scrollTop';
import Nav from './Nav/Nav';
export default function Header({
    currentTheme,
    texts,
    handleTheme,
    handleLanguaje,
    handleContactformOpen,
}: iHeaderProps) {
    return (
        <header className="main__header sticky   top-0 z-10 flex w-full items-center justify-between p-8">
            <Nav
                scrollToTop={scrollToTop}
                handleTheme={handleTheme}
                handleLanguaje={handleLanguaje}
                handleContactformOpen={handleContactformOpen}
                currentTheme={currentTheme}
                texts={texts}
            />
        </header>
    );
}
