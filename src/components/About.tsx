import React from 'react';
import { SecondaryTitle, SecondaryDescription } from '@Components/index';
import { iAboutProps } from '@Interfaces/index';

export default function About({ subtitle, msg, reference }: iAboutProps) {
    return (
        <section
            className="main__about section-hidden  flex w-full items-center justify-center text-center text-dark dark:text-white sm:w-full sm:p-4 md:w-full md:p-4 lg:w-full lg:p-8 xl:w-full xl:p-8 2xl:w-full"
            id="about"
            ref={reference}
        >
            <AboutContent subtitle={subtitle} msg={msg} />
        </section>
    );
}

interface iAboutContent {
    subtitle: string;
    msg: string;
}

export function AboutContent({ subtitle, msg }: iAboutContent) {
    return (
        <div className="main__about__text test container flex flex-col gap-16 p-12 text-2xl">
            <SecondaryTitle subtitle={subtitle} />
            <SecondaryDescription msg={msg} />
        </div>
    );
}
