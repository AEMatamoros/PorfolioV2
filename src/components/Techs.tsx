import React from "react";
let techs = [
  { hoverColor: "text-yellow-500", name: "HTML", icon: `fa-brands fa-html5` },
  { hoverColor: "text-red-500", name: "CSS", icon: `fa-brands fa-css3-alt` },
  { hoverColor: "text-purple-500", name: "SASS", icon: "fa-brands fa-sass" },
  {
    hoverColor: "text-yellow-500",
    name: "Javascript",
    icon: "fa-brands fa-js",
  },
  {
    hoverColor: "text-blue-500",
    name: "Typescript",
    icon: "fa-solid fa-file-code",
  },
  {
    hoverColor: "text-blue-500",
    name: "TailwindCSS",
    icon: "fa-sharp fa-solid fa-t",
  },
  {
    hoverColor: "text-purple-500",
    name: "Bootstrap",
    icon: "fa-brands fa-bootstrap",
  },
  { hoverColor: "text-blue-500", name: "React", icon: "fa-brands fa-react" },
  { hoverColor: "text-green-500", name: "VueJS", icon: `fa-brands fa-vuejs` },
  {
    hoverColor: "text-red-500",
    name: "Angular",
    icon: "fa-brands fa-angular",
  },
  { hoverColor: "text-green-500", name: "Node", icon: "fa-brands fa-node" },
  { hoverColor: "text-gray-500", name: "Express", icon: "fa-light fa-e" },
  {
    hoverColor: "text-yellow-600",
    name: "Python",
    icon: "fa-brands fa-python",
  },
  { hoverColor: "text-green-500", name: "Django", icon: `fa-light fa-d` },
  { hoverColor: "text-blue-500", name: "SQL", icon: `fa-solid fa-database` },
  {
    hoverColor: "text-green-500",
    name: "NoSQL",
    icon: `fa-solid fa-share-nodes`,
  },
  {
    hoverColor: "text-purple-500",
    name: "Github",
    icon: `fa-brands fa-github`,
  },
];
export default function Techs({ title }: { title: string }) {
  return (
    <section
      className="main__techs  flex justify-center items-center dark:text-main w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full sm:mt-8 md:mt-8 lg:mt-0 xl:mt-0 2xl:w-612 sm:p-4 md:p-4 lg:p-8 xl:p-8 text-center section-hidden"
      id="techs"
    >
      <div className="container">
        <h2 className="font-bold text-indigo-500">{title}</h2>
        <ul className="tech-container  main__about__icons text-3xl flex flex-wrap justify-center items-center gap-4 p-4">
          {techs.map((tec, index) => (
            <li className="p-1 techs__standar" key={index} title={tec.name}>
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
          ))}
        </ul>
      </div>
    </section>
  );
}
