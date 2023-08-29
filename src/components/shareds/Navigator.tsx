import React from "react";

export default function Navigator({
  heroRef,
  aboutRef,
  expRef,
  proyectsRef,
  active,
}: any) {
  const handleScroll = (ref: any) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <aside className="fixed left-8 top-1/4 ">
      <ul className="hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex  flex-col gap-4 relative">
        <li
          onClick={() => {
            handleScroll(heroRef.current);
          }}
          className={`w-16  h-16 ${
            active == "hero" ? "text-indigo-500" : "text-main"
          }  flex justify-center gap-x-8 items-center hover:text-indigo-500  cursor-pointer`}
        >
          <i className="fa-xl fa-brands fa-fort-awesome-alt"></i>
          {active == "hero" && (
            <i className="fa-solid fa-code-commit absolute -left-2 text-indigo-500"></i>
          )}
        </li>
        <li
          onClick={() => {
            handleScroll(aboutRef.current);
          }}
          className={`w-16  h-16 ${
            active == "about" || active == "techs"
              ? "text-indigo-500"
              : "text-main"
          }  flex justify-center gap-x-8 items-center hover:text-indigo-500  cursor-pointer`}
        >
          <i className="fa-xl fa-regular fa-circle-user"></i>
          {active == "about" ||
            (active == "techs" && (
              <i className="fa-solid fa-code-commit absolute -left-2 text-indigo-500"></i>
            ))}
        </li>
        <li
          onClick={() => {
            handleScroll(expRef.current);
          }}
          className={`w-16  h-16 ${
            active == "experience" ? "text-indigo-500" : "text-main"
          }  flex justify-center gap-x-8 items-center hover:text-indigo-500  cursor-pointer`}
        >
          <i className="fa-xl fa-solid fa-circle-dot"></i>
          {active == "experience" && (
            <i className="fa-solid fa-code-commit absolute -left-2 text-indigo-500"></i>
          )}
        </li>
        <li
          onClick={() => {
            handleScroll(proyectsRef.current);
          }}
          className={`w-16  h-16 ${
            active == "portfolio" ? "text-indigo-500" : "text-main"
          }  flex justify-center gap-x-8 items-center hover:text-indigo-500  cursor-pointer`}
        >
          <i className="fa-xl fa-brands fa-connectdevelop"></i>
          {active == "portfolio" && (
            <i className="fa-solid fa-code-commit absolute -left-2 text-indigo-500"></i>
          )}
        </li>
      </ul>
    </aside>
  );
}
