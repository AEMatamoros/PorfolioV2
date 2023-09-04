import React from "react";
import formatDate from "../utils/date";
import { EXPERIENCE } from "../constants/Experience";
import SecondaryTitle from "./shareds/SecondaryTitle";
export default function Experience({
  subtitle,
  currentLanguaje,
  reference,
}: {
  subtitle: string;
  currentLanguaje: string;
  reference: any;
}) {
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
        <article
          key={index}
          className="experience__card flex items-center justify-center p-6 sm:w-full md:w-6/12 lg:w-5/12 xl:w-4/12 w-full h-auto text-dark dark:text-white "
        >
          <div className="flex flex-wrap items-center">
            <ExperiencePlaceName place={place} />
            <div className="h-full flex flex-col justify-between w-10/12">
              <ExpDescription
                place={place}
                currentLanguaje={currentLanguaje}
              ></ExpDescription>
              <TechList place={place}></TechList>
              <TimeList place={place} currentLanguaje={currentLanguaje} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
function ExperiencePlaceName({ place }: { place: any }) {
  return (
    <h3 className="w-2/12 h-full exp-decoration font-bold text-2xl transform -rotate-90 text-center flex justify-center items-center">
      {place.name}
    </h3>
  );
}

function ExpDescription({
  place,
  currentLanguaje,
}: {
  place: any;
  currentLanguaje: string;
}) {
  return (
    <>
      {currentLanguaje === "ES" ? (
        <p className="text-xl leading-relaxed text-center">
          {place.descriptionES}
        </p>
      ) : (
        <p className="text-xl leading-relaxed ">{place.descriptionEN}</p>
      )}
    </>
  );
}

function TechList({ place }: { place: any }) {
  return (
    <ul className="flex flex-wrap justify-center items-center text-center pt-2">
      {place.tecs.map((tec: any, index: number) => (
        <TechItem tec={tec} key={index} />
      ))}
    </ul>
  );
}

function TechItem({ tec, key }: { tec: any; key: number }) {
  return (
    <li
      key={key}
      className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-indigo-400 text-white opacity-70"
    >
      {tec}
    </li>
  );
}

function TimeList({
  place,
  currentLanguaje,
}: {
  place: any;
  currentLanguaje: string;
}) {
  return (
    <ul className="text-base mt-0 list-none list-inside  leading-relaxed">
      <TimeDescription place={place} currentLanguaje={currentLanguaje} />
      {place.current && <TimeCurrent currentLanguaje={currentLanguaje} />}
    </ul>
  );
}

function TimeDescription({
  place,
  currentLanguaje,
}: {
  place: any;
  currentLanguaje: string;
}) {
  return (
    <li className="text-center">
      {formatDate(
        place.time,
        place.timeEnd ? place.timeEnd : "",
        currentLanguaje
      )}
    </li>
  );
}

function TimeCurrent({ currentLanguaje }: { currentLanguaje: string }) {
  return (
    <li className="text-main font-semibold text-center">
      {currentLanguaje == "ES" ? "Actualidad" : "Current"}
    </li>
  );
}
