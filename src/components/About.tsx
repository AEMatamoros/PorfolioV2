import React, { RefObject } from "react";
import { SecondaryTitle, SecondaryDescription } from "../components";
import { iAboutProps } from "../interfaces/iAboutProps";

export default function About({ subtitle, msg, reference }: iAboutProps) {
  return (
    <section
      className="flex main__about  justify-center items-center text-dark dark:text-white w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full sm:p-4 md:p-4 lg:p-8 xl:p-8 text-center section-hidden"
      id="about"
      ref={reference}
    >
      <AboutContent subtitle={subtitle} msg={msg} />
    </section>
  );
}

interface iAboutContent {
  subtitle: string;
  msg: string;
}

function AboutContent({ subtitle, msg }: iAboutContent) {
  return (
    <div className="container main__about__text text-2xl p-12 flex flex-col gap-16">
      <SecondaryTitle subtitle={subtitle} />
      <SecondaryDescription msg={msg} />
    </div>
  );
}
