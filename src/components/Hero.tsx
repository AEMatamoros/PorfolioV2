import React from 'react';
import { Title, Subtitle, SectionDescription } from '../components';
import { iHeroProps } from '../interfaces/iHeroProps';
export default function Hero({ title, subtitle, msg, reference }: iHeroProps) {
    return (
        <section
            className="main__hero flex flex-col justify-center w-full section-hidden p-8 sm:p-8 md:p-8 lg:p-20 xl:p-20"
            id="hero"
            ref={reference}
        >
            <HeroContent title={title} subtitle={subtitle} msg={msg} />
        </section>
    );
}
interface iHeroContent {
    title: string;
    subtitle: string;
    msg: string;
}
export function HeroContent({ title, subtitle, msg }: iHeroContent) {
    return (
        <section className="main__hero__text flex flex-col justify-center items-start container m-auto text-center md:text-left ">
            <Title title={title}></Title>
            <Subtitle subtitle={subtitle}></Subtitle>
            <SectionDescription msg={msg}></SectionDescription>
        </section>
    );
}
