import React from 'react';

export default function SectionDescription({ msg }: { msg: string }) {
    return (
        <p className="third-text-animation text-center md:text-left w-full mt-4 text-dark font-bold dark:text-white">
            {msg}
        </p>
    );
}