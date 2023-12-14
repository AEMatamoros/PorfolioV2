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
            className="main__exp w-full p-4 sm:p-4 md:p-4 lg:p-16 xl:p16 duration-75 flex flex-wrap gap-4 justify-center items-center section-hidden"
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
        <div className="container flex flex-wrap gap-8 justify-center items-center">
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
        <article className=" experience__card flex items-center justify-center p-6 sm:w-full md:w-6/12 lg:w-5/12 xl:w-4/12 w-full h-auto text-dark dark:text-white ">
            <div className="flex flex-wrap items-center">
                <ExperiencePlaceName placeName={place.name} />
                <div className="h-full flex flex-col justify-between w-10/12">
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
        <h3 className="w-2/12 h-full exp-decoration font-bold text-2xl transform -rotate-90 text-center flex justify-center items-center">
            {placeName}
        </h3>
    );
}

function ExpDescription({ place, currentLanguaje }: iExperienceDescription) {
    return (
        <>
            {currentLanguaje === 'ES' ? (
                <p className="text-xl leading-relaxed text-center">
                    {place.descriptionES}
                </p>
            ) : (
                <p className="text-xl leading-relaxed text-center">
                    {place.descriptionEN}
                </p>
            )}
        </>
    );
}

function TechList({ placeTechs }: iTechListProps) {
    return (
        <ul className="flex flex-wrap justify-center items-center text-center pt-2">
            {placeTechs.map(tec => (
                <TechItem tec={tec} key={`tec-${tec}`} />
            ))}
        </ul>
    );
}

function TechItem({ tec }: iTechName) {
    return (
        <li className="mr-2 mb-2 px-3 py-1 text-xs bg-blue-400 text-white opacity-70">
            {tec}
        </li>
    );
}

function TimeList({ place, currentLanguaje }: iTimeList) {
    return (
        <ul className="text-base mt-0 list-none list-inside  leading-relaxed">
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
        <li className="text-blue-500 font-semibold text-center">
            {currentLanguaje == 'ES' ? 'Actualidad' : 'Current'}
        </li>
    );
}
