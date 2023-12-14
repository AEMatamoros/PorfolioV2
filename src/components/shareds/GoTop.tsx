import React from 'react';
import { scrollToTop } from '../../utils/scrollTop';

export default function GoTop() {
    return (
        <i
            className="goTop fa-2xl fa-solid fa-circle-arrow-up cursor-pointer animate-bounce text-blue-500 opacity-25 hover:opacity-100"
            onClick={scrollToTop}
        ></i>
    );
}
