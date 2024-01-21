import React from 'react';

export default function SectionDescription({ msg }: { msg: string }) {
    return (
        <p className="third-text-animation mt-4 w-full text-center font-bold text-dark dark:text-white md:text-left">
            {msg}
        </p>
    );
}
