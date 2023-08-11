import React from "react";

export default function Navigator({
  heroRef,
  aboutRef,
  expRef,
  proyectsRef,
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
      <ul className="hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex  flex-col gap-4">
        <li
          onClick={() => {
            handleScroll(heroRef.current);
          }}
          className="w-16  h-16 bg-main flex justify-center gap-x-8 items-center hover:bg-pink-500 text-light cursor-pointer"
        >
          <i className="fa-xl fa-solid fa-house-user"></i>
        </li>
        <li
          onClick={() => {
            handleScroll(aboutRef.current);
          }}
          className="w-16  h-16 bg-main flex justify-center gap-x-8 items-center hover:bg-pink-500 text-light cursor-pointer"
        >
          <i className="fa-xl fa-regular fa-address-card"></i>
        </li>
        <li
          onClick={() => {
            handleScroll(expRef.current);
          }}
          className="w-16  h-16 bg-main flex justify-center gap-x-8 items-center hover:bg-pink-500 text-light cursor-pointer"
        >
          <i className="fa-xl fa-solid fa-book"></i>
        </li>
        <li
          onClick={() => {
            handleScroll(proyectsRef.current);
          }}
          className="w-16  h-16 bg-main flex justify-center gap-x-8 items-center hover:bg-pink-500 text-light cursor-pointer"
        >
          <i className="fa-xl fa-solid fa-code"></i>
        </li>
      </ul>
    </aside>
  );
}
