import React from 'react';
import { scrollToTop } from '../../utils/scrollTop';

export default function GoTop({ state }: { state: boolean }) {
    return (
        <i
            className={`goTop ${
                !state && 'move'
            } fa-2xl fa-solid fa-circle-arrow-up animate-bounce cursor-pointer text-indigo-700 opacity-75 hover:opacity-100`}
            onClick={scrollToTop}
        ></i>
    );
}
