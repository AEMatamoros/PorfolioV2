import React from 'react';
import formatDate from '../utils/date';
import SecondaryTitle from './shareds/SecondaryTitle';
import {
    iExperienceProps,
    iExperienceDescription,
    IExperiencePlaceName,
} from '../interfaces/iExperienceProps';
import { iTechListProps, iTechName } from '../interfaces/iTechListProps';
import { iTimeDescriptionProps, iTimeList } from '../interfaces/iTime';
import { EXPERIENCE } from '../constants/Experience';
export default function Experience({
    subtitle,
    currentLanguaje,
    reference,
}: iExperienceProps) {
    return (
        <section
            className="main__exp xl:p16 section-hidden flex w-full flex-wrap items-center justify-center gap-4 p-4 duration-75 sm:p-4 md:p-4 lg:p-16"
            id="experience"
            ref={reference}
        >
            <ExperienceContent
                subtitle={subtitle}
                currentLanguaje={currentLanguaje}
            />
        </section>
    );
}
interface iExperienceContent {
    subtitle: string;
    currentLanguaje: string;
}

function ExperienceContent({ subtitle, currentLanguaje }: iExperienceContent) {
    return (
        <div className="container flex flex-wrap items-center justify-center gap-8">
            <SecondaryTitle subtitle={subtitle}></SecondaryTitle>
            {EXPERIENCE.map((place, index) => (
                <ExperienceCard
                    place={place}
                    currentLanguaje={currentLanguaje}
                    key={index}
                />
            ))}
        </div>
    );
}
export function ExperienceCard({
    place,
    currentLanguaje,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    place: any;
    currentLanguaje: string;
}) {
    return (
        <article className=" experience__card flex h-auto w-full items-center justify-center p-6 text-dark dark:text-white sm:w-full md:w-6/12 lg:w-5/12 xl:w-4/12 ">
            <div className="flex flex-wrap items-center">
                <ExperiencePlaceName placeName={place.name} />
                <div className="flex h-full w-10/12 flex-col justify-between">
                    <ExpDescription
                        place={place}
                        currentLanguaje={currentLanguaje}
                    ></ExpDescription>
                    <TechList placeTechs={place.tecs}></TechList>
                    <TimeList place={place} currentLanguaje={currentLanguaje} />
                </div>
            </div>
        </article>
    );
}
function ExperiencePlaceName({ placeName }: IExperiencePlaceName) {
    return (
        <h3 className="exp-decoration flex h-full w-2/12 -rotate-90 transform items-center justify-center text-center text-2xl font-bold">
            {placeName}
        </h3>
    );
}

function ExpDescription({ place, currentLanguaje }: iExperienceDescription) {
    return (
        <>
            {currentLanguaje === 'ES' ? (
                <p className="text-center text-xl leading-relaxed">
                    {place.descriptionES}
                </p>
            ) : (
                <p className="text-center text-xl leading-relaxed">
                    {place.descriptionEN}
                </p>
            )}
        </>
    );
}

function TechList({ placeTechs }: iTechListProps) {
    return (
        <ul className="flex flex-wrap items-center justify-center pt-2 text-center">
            {placeTechs.map(tec => (
                <TechItem tec={tec} key={`tec-${tec}`} />
            ))}
        </ul>
    );
}

function TechItem({ tec }: iTechName) {
    return (
        <li className="mb-2 mr-2 bg-blue-400 px-3 py-1 text-xs text-white opacity-70">
            {tec}
        </li>
    );
}

function TimeList({ place, currentLanguaje }: iTimeList) {
    return (
        <ul className="mt-0 list-inside list-none text-base  leading-relaxed">
            <TimeDescription
                time={place.time}
                timeEnd={place.timeEnd}
                currentLanguaje={currentLanguaje}
            />
            {place.current && <TimeCurrent currentLanguaje={currentLanguaje} />}
        </ul>
    );
}

function TimeDescription({
    time,
    timeEnd,
    currentLanguaje,
}: iTimeDescriptionProps) {
    return (
        <li className="text-center">
            {formatDate(time, timeEnd ? timeEnd : '', currentLanguaje)}
        </li>
    );
}

function TimeCurrent({ currentLanguaje }: { currentLanguaje: string }) {
    return (
        <li className="text-center font-semibold text-blue-500">
            {currentLanguaje == 'ES' ? 'Actualidad' : 'Current'}
        </li>
    );
}
