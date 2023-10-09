import React from "react";
import SecondaryTitle from "./shareds/SecondaryTitle";
import { TECHS } from "../constants/Techs";
export default function Techs({ subtitle }: { subtitle: string }) {
  return (
    <section
      className="main__techs  flex justify-center items-center dark:text-blue-500 w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full sm:mt-8 md:mt-8 lg:mt-0 xl:mt-0 2xl:w-612 sm:p-4 md:p-4 lg:p-8 xl:p-8 text-center section-hidden"
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

function TechsList({ techs }: { techs: any[] }) {
  return (
    <ul className="tech-container  main__about__icons text-3xl flex flex-wrap justify-center items-center gap-4 p-4">
      {techs.map((tec, index) => (
        <TechItem tec={tec} key={`tecname-${tec}${index}`} />
      ))}
    </ul>
  );
}
interface iTechItem {
  tec: any;
}

export function TechItem({ tec }: iTechItem) {
  return (
    <li className="p-1 techs__standar" title={tec.name}>
      <div
        className={
          "tech-item h-full w-full card  cursor-pointer transition-all duration-300 flex flex-col justify-center items-center " +
          tec.hoverColor
        }
      >
        <i
          className={`${tec.icon} sm:fa-2x lg:fa-2x xl:fa-2x 2xl:fa-2x fa-2x transform hover:scale-110`}
        ></i>
        {/* <span className='text-base font-bold mt-4'>{tec.name}</span> */}
      </div>
    </li>
  );
}
