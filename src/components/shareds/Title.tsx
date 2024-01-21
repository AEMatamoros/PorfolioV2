import React from 'react';

export default function Title({ title }: { title: string }) {
    return (
        <h1 className="first-text-animation text-6xl text-blue-500 sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
            {title}
        </h1>
    );
}
