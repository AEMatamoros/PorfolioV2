import React from 'react'
import { scrollToTop } from '../../utils/scrollTop'
import { useEffect } from 'react';
export default function GoTop() {
    return (<div className='sticky -bottom-16'>
        <i className="absolute right-8 fa-solid fa-hand-pointer fa-2x cursor-pointer animate-bounce text-pink-500 " onClick={scrollToTop}></i>
    </div>
    )
}
