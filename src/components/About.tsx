import React from "react";

export default function About({
  title,
  msg,
  reference,
}: {
  title: string;
  msg: string;
  reference: any;
}) {
  return (
    <section
      className="flex main__about  justify-center items-center text-dark dark:text-white w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full sm:p-4 md:p-4 lg:p-8 xl:p-8 text-center section-hidden"
      id="about"
      ref={reference}
    >
      <div className="container main__about__text text-2xl p-4 flex flex-col gap-16">
        <h2 className="font-bold text-indigo-500">{title} ...</h2>
        <p className="sm:text-sm md:text-2xl">{msg}</p>
      </div>
    </section>
  );
}
