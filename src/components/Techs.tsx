import React from 'react';
import { SecondaryTitle } from '@Components/index';
import { TECHS } from '@Constants/index';
export default function Techs({ subtitle }: { subtitle: string }) {
    return (
        <section
            className="main__techs  2xl:w-612 section-hidden flex w-full items-center justify-center text-center dark:text-blue-500 sm:mt-8 sm:w-full sm:p-4 md:mt-8 md:w-full md:p-4 lg:mt-0 lg:w-full lg:p-8 xl:mt-0 xl:w-full xl:p-8 2xl:w-full"
            id="techs"
        >
            <TechsContent subtitle={subtitle} />
        </section>
    );
}

interface iTechsContent {
    subtitle: string;
}

function TechsContent({ subtitle }: iTechsContent) {
    return (
        <div className="container">
            <SecondaryTitle subtitle={subtitle} />
            <TechsList techs={TECHS} />
        </div>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TechsList({ techs }: { techs: any[] }) {
    return (
        <ul className="tech-container  main__about__icons flex flex-wrap items-center justify-center gap-4 p-4 text-3xl">
            {techs.map((tec, index) => (
                <TechItem tec={tec} key={`tecname-${tec}${index}`} />
            ))}
        </ul>
    );
}
interface iTechItem {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tec: any;
}

export function TechItem({ tec }: iTechItem) {
    return (
        <li className="techs__standar p-1 " title={tec.name}>
            <div
                className={
                    'tech-item card flex h-full  w-full cursor-pointer flex-col items-center justify-center transition-all duration-300 ' +
                    tec.hoverColor
                }
            >
                <i
                    className={`${tec.icon} sm:fa-2x lg:fa-2x xl:fa-2x 2xl:fa-2x fa-2x transform hover:scale-110 `}
                ></i>
                {/* <span className='text-base font-bold mt-4'>{tec.name}</span> */}
            </div>
        </li>
    );
}
