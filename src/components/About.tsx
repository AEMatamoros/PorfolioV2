import React from "react";

export default function About({ title, msg }: { title: string; msg: string }) {
  return (
    <section className="flex main__about  justify-center items-center text-dark dark:text-white w-full sm:w-full md:w-full lg:w-6/12 xl:w-6/12 2xl:w-612 sm:p-4 md:p-4 lg:p-8 xl:p-8 text-center section-hidden">
      -
      <div className="main__about__text text-2xl p-4 flex flex-col gap-16">
        <h2 className="font-bold text-main">{title} ...</h2>
        <p className="sm:text-sm md:text-2xl">{msg}</p>
      </div>
    </section>
  );
}
