import React from "react";
import formatDate from "../utils/date";

let exp = [
  {
    name: "GoIt",
    descriptionEN: "Programing Teacher - FullStack",
    descriptionES: "Maestro de programacion - FullStack",
    time: "December 31, 2022 23:59:59",
    tecs: ["HTML", "CSS", "REACT", "NodeJS", "Figma"],
    current: true,
  },
  {
    name: "Infatlan",
    descriptionEN: "Sr.Front-End Developer",
    descriptionES: "Desarrollador Sr.Front-End",
    time: "June 6, 2022 23:59:59",
    tecs: ["UI5", "Figma", "Angular", "React"],
    current: true,
  },
  {
    name: "Impact",
    descriptionEN: "Web Developer",
    descriptionES: "Desarrollador web",
    time: "April 22, 2021 23:59:59",
    timeEnd: "April 22, 2022 23:59:59",
    tecs: ["REACT", "Angular", "Python", "NodeJS", "Django"],
    current: false,
  },
  {
    name: "FreeLancer",
    descriptionEN: "Autonomous",
    descriptionES: "Autónomo",
    time: "March 22, 2020 23:59:59",
    timeEnd: "March 22, 2021 23:59:59",
    tecs: ["Mutltiples Stacks"],
    current: false,
  },
];

export default function Experience({
  title,
  currentLanguaje,
  reference,
}: {
  title: string;
  currentLanguaje: string;
  reference: any;
}) {
  return (
    <section
      className="main__exp w-full p-4 sm:p-4 md:p-4 lg:p-16 xl:p16 duration-75 flex flex-wrap gap-4 justify-center items-center section-hidden"
      id="experience"
      ref={reference}
    >
      <div className="container flex flex-wrap gap-8 justify-center items-center">
        <h2 className="font-bold w-full text-center text-indigo-500">
          {title}
        </h2>
        {exp.map((place, index) => (
          <div
            key={index}
            className="experience__card flex items-center justify-center p-6 sm:w-full md:w-6/12 lg:w-5/12 xl:w-4/12 w-full h-auto text-dark dark:text-white "
          >
            <div className="flex flex-wrap items-center">
              <div className="w-full flex items-center">
                <h3 className="w-2/12 h-full exp-decoration font-bold text-2xl transform -rotate-90 text-center flex justify-center items-center">
                  {place.name}
                </h3>
                <div className="h-full flex flex-col justify-between w-10/12">
                  {currentLanguaje === "ES" ? (
                    <p className="text-xl leading-relaxed text-center">
                      {place.descriptionES}
                    </p>
                  ) : (
                    <p className="text-xl leading-relaxed ">
                      {place.descriptionEN}
                    </p>
                  )}
                  <div className="flex flex-wrap justify-center items-center text-center pt-2">
                    {place.tecs.map((tec, index) => (
                      <div
                        key={index}
                        className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-indigo-400 text-white opacity-70"
                      >
                        {tec}
                      </div>
                    ))}
                  </div>
                  <ul className="text-base mt-0 list-none list-inside  leading-relaxed">
                    <li className="text-center">
                      {formatDate(
                        place.time,
                        place.timeEnd ? place.timeEnd : "",
                        currentLanguaje
                      )}
                    </li>
                    {place.current && (
                      <li className="text-main font-semibold text-center">
                        {currentLanguaje == "ES" ? "Actualidad" : "Current"}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
